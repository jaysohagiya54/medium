import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import useBlogs from '../hooks/useBlogs'
import { Link } from 'react-router-dom';

const Blogs = () => {
  const {loading,blogs} = useBlogs();
  if(loading === true){
    return <>
    loading...
    </>
  }
  return (
    <div>
      
        <Appbar />
   {blogs && blogs.map((blog) => (
      <Link className='flex justify-center' to={`/blog/${blog.id}`} key={blog.id}>
           <BlogCard title={blog.title} authorName={blog.author.name || "Jenny Kakoudakis"} content={blog.content} publishedDate={blog.publishedDate}/>
        </Link>
    ))}

   </div>
   
  )
}

export default Blogs