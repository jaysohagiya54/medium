import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config';

interface blog {
    map(arg0: (blog: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
    title:string,
    content:string,
    publishedDate:Date,
    author:{
        name:string
    },
}

const useBlogDetail = ({id}:{id:string}) => {
    const [loading,setLoading] = useState(true);
    const [blog,setBlog] = useState<blog>();
    const handleGetBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                    headers : {
                        "Authorization":"Bearer "+localStorage.getItem("token")
                    }
                });
                if(response.status){
                    const blog = response.data.blog;
                    setBlog(blog);
                    setLoading(false);
                }
            } catch (error) {
                console.error( error);
                
            }
    }
    useEffect(() => {
            handleGetBlog();
    },[])
    return {
    loading,blog
  }
}

export default useBlogDetail