import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@jay45sohagiya/medium-common/dist";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body)
  if (!success) {
    c.status(403);
    return c.json({ error: "user inputs are not correct. " });
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET)

  return c.json({
    jwt: token
  })
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body)
  if (!success) {
    c.status(403);
    return c.json({ error: "user inputs are not correct. " });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
})

userRouter.get('/all', async (c) => {
  const { DATABASE_URL } = c.env;

  if (!DATABASE_URL) {
    console.error('DATABASE_URL is not set');
    c.status(500);
    return c.json({ error: 'Internal Server Error' });
  }

  // Initialize Prisma Client
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    // Fetch blogs from the database
    const users = await prisma.user.findMany({
      select:{
        name:true,
        email:true,
        id:true,
      }
    });
    // Check if blogs array is empty
    if (!users || users.length === 0) {
      c.status(200);
      return c.json({
        results : [],
        msg: "No users found",
      });
    }

    // Return the blogs
    return c.json({
      results : users,
      msg:"All users are here!"
    });
  } catch (error) {
    // Error handling
    console.error('Error fetching blogs:', error);
    c.status(500);
    return c.json({
      error: 'Internal Server Error',
    });
  } 
});

