import { useParams } from 'react-router-dom'
import useBlogDetail from '../hooks/useBlogDetail';
import Appbar from '../components/Appbar';

const BlogFull = () => {
    const {id} = useParams();
    if(!id){
        return <>
        No id detected.
        </>
    }
    const {blog} = useBlogDetail({id});
    if(!blog){
        return <>
        Nothing to show for.
        </>
    }
  return (
    <div>
      <Appbar />
      <div className='grid grid-cols-12 px-20 py-10 items-start'>
        <div className='col-span-8'>
                <div className=''>
                    <h3 className='text-3xl font-semibold'>{blog.title}</h3>
                    <h3 className='text-lg font-normal mt-3 text-gray-500'>{blog.content}</h3>
                </div>
               
        </div>
        <div className='col-span-4 pl-10'>
                <div className='text-slate-400'>
                    Author
                </div>
                <div className='pl-10 mt-5'>
                      <span className='font-semibold text-md tracking-wider'>  {blog.author.name || "Anonyomous" }</span> <br/>
                       <span className='font-normal text-xs text-slate-600'> {
                                " Just embarking on journey of life with only hopes. "
                        }</span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default BlogFull