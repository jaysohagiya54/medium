import { useState } from 'react'
import Appbar from '../components/Appbar'
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBlog = () => {
    const [title, setTitle] = useState<string>();
    const [content, setContent] = useState<string>();
    const navigate = useNavigate();
    const handleSubmit = async () => {

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            });
            if (response.status) {
                alert("Solo created successfully, Huraaah!")
                navigate("/blogs")
            }
            else {
                alert("Something wrong with signup")
            }
        } catch (error) {
            console.error('error: ', error);
        }
    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <div className="font-semibold text-4xl text-left">
                        Create your Solo
                    </div>
                    <div className="mt-5">
                        <input onChange={(e) => setTitle(e.target.value)} type="text" className="w-full max-w-lg px-5 text-3xl focus:border-black outline-none" placeholder="Title" />
                        <textarea onChange={(e) => setContent(e.target.value)} className="w-full max-w-lg p-5 text-xl focus:border-black outline-none" placeholder="Content" />
                        <button type='submit' onClick={handleSubmit} className="ml-4 text-white text-sm mt-2 bg-green-700 hover:bg-opacity-80 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-full w-screen sm:w-auto text-center py-2 px-6">Publish</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewBlog