import React from 'react'
import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div className='flex justify-between items-center py-5 px-10 border-b border-slate-200'>
        <Link to={"/blogs"} className='text-xl font-semibold tracking-wider'>
                SoloS
        </Link>
        <div>
        <Link to={"/blog/create"} className="text-white text-xs mt-4 bg-green-700 hover:bg-opacity-80 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-full w-screen sm:w-auto px-2 py-1 text-center mr-4">Create</Link>
        <Avatar letter="J" size={"big"} />
        </div>

    </div>
  )
}

export default Appbar