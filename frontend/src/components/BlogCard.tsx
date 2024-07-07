
export interface blogProps {
    authorName : string,
    publishedDate : string,
    title : string,
    content: string,
}

const BlogCard = ({authorName,publishedDate,title,content}:blogProps) => {
  return (
    <div className='flex flex-col justify-center my-1 mx-4 border-b border-slate-300 p-3 w-1/2'>
     <div className='flex items-center'>
  
           <Avatar letter={authorName[0]} size={"small"} />
        <div className='text-xs font-semibold pl-2'>
            {authorName}{" "} <span className='font-thin text-xs'>&#9679;</span>
        </div>
        <div className='text-[0.6rem] font-light pl-2'>
            {publishedDate.slice(0,10)}
        </div>
     </div>
        <div className='text-xl hover:cursor-pointer font-bold mt-2'>
            {title}
        </div>
        <div className='text-md mt-1 font-normal'>
           {content.length > 100 ? content.slice(0,200) + "..." : content }
        </div>
        <div className='mt-5 text-[0.6rem] font-light text-slate-400'>
            {Math.ceil(content.length)/100} min{"(s)"} read
        </div>

    </div>
  )
}

export default BlogCard

export function Avatar ({letter,size}:{letter:string,size:string}) {
    return    (<div className={`relative inline-flex items-center justify-center text-xs overflow-hidden bg-black bg-opacity-65 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" :"w-8 h-8"}`}>
    <span className="font-normal text-white dark:text-black">{letter}</span>
</div>)
}