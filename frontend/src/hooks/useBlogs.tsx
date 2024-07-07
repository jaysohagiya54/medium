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

const useBlogs = () => {
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs] = useState<blog>();
    const handleGetBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                    headers : {
                        "Authorization":"Bearer "+localStorage.getItem("token")
                    }
                });
                if(response.status){
                    const blogs = response.data.results;
                    setBlogs(blogs);
                    setLoading(false);
                }
            } catch (error) {
                console.error( error);
                
            }
    }
    useEffect(() => {
            handleGetBlogs();
    },[])
    return {
    loading,blogs
  }
}

export default useBlogs