import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { createPostInput,updatePostInput } from "@jay45sohagiya/medium-common/dist";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables : {
        userId : string
    }
}>();

blogRouter.post('/', async (c) => {

	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  const {success} = createPostInput.safeParse(body)
  if(!success){
    c.status(403);
    return c.json({ error: "user inputs are not correct. " });
  }

  const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId
		}
	});
	return c.json({
		id: post.id
	});
})
blogRouter.post('/update', async (c) => {

	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
  const {success} = updatePostInput.safeParse(body)
  if(!success){
    c.status(403);
    return c.json({ error: "User Inputs are not correct " });
  }

	await prisma.post.update({
        where : {
            id : body.id,
            authorId:userId
        },
		data: {
			title: body.title,
			content: body.content,
		}
	});
	return c.text("Blog updated Successfully.")
})

blogRouter.get('/bulk', async (c) => {
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
      const blogs = await prisma.post.findMany({
        select:{
          content:true,
          title:true,
          id:true,
          publishedDate:true,
          author:{
            select:{
              name:true
            }
          }
        }
      });
      // Check if blogs array is empty
      if (!blogs || blogs.length === 0) {
        c.status(200);
        return c.json({
          results : [],
          msg: "No blogs found",
        });
      }
  
      // Return the blogs
      return c.json({
        results : blogs,
        msg:"All blogs are here!"
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


blogRouter.get('/:id', async (c) => {

	const id = c.req.param('id');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const blog = await prisma.post.findUnique({
        where : {
            id
        },
        select:{
          title:true,
          id:true,
          content:true,
          publishedDate:true,
          author:{
            select:{
              name:true
            }
          }

        }
	});
    if(!blog){
        c.status(404)
        return c.json({
        msg : "No blog found of this id"
        })
    }
	return c.json({
        blog : blog
    })
})


  
blogRouter.delete('/removeall', async (c) => {
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
    await prisma.post.deleteMany();
    

    // Return the blogs
    return c.json({
      msg:"All blogs are deleted!"
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

