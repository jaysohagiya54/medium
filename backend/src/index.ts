import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { verify } from 'hono/jwt';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.use("/api/v1/blog/*",async (c,next) => {
  const header = c.req.header("authorization");
  const token = header?.split(" ")[1];
     if(!token){
    c.status(404)
    return c.json({
      msg:"No headers found"
    })
   }

  const response = await verify(token,c.env?.JWT_SECRET);

  if(response.id){
    //@ts-ignore
    c.set("userId",response.id)
    await next() 
  } else {
    return c.json({
      msg:"Token is invalid"
    })
  }

}
)
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app

