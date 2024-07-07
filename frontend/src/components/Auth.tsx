import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignupType} from "@jay45sohagiya/medium-common/dist"
import axios from 'axios'
import {BACKEND_URL} from "../config"

const Auth = ({ type }: {
    type:
    "Signin" | "Signup"
}) => {
    const [postInputs,setPostInputs] = useState<SignupType>({
        email: "",
        name:"",
        password:""
    })
    const navigate = useNavigate();

    const handleSubmit = async() => {
        let response;
        try {
            if(type === "Signin"){
                response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                    email: postInputs.email,
                    password: postInputs.password,                
              });
            } else {
                response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
                    email: postInputs.email,
                    password: postInputs.password,
                    name:postInputs.name
              });
            }
           
            if(response.status){
                localStorage.setItem("token",response.data.jwt);
                navigate("/blogs")
            }
            else{
                alert("Something wrong with signup")
            }
        } catch (error) {
            console.error('error: ', error);
            
        }
    }
    return (

        <div className='flex justify-center flex-col items-center p-3 h-screen'>
            <div className='text-center font-bold text-3xl tracking-wider font-sans-Montserrat'>
            {type === "Signin" ? "Welcome back" : "Create an account"}    
            </div>
            <div className='text-md text-gray-400'>
            {type === "Signin" ? "Don't have an account? " : "Already have an account? "}      
                <Link to={type === "Signin" ? "/signup" : "/signin"} className='text-sm underline'>{type === "Signin" ? "Register" : "Login"} </Link>
            </div>
           {type === "Signup" ?  <LabelInput label={"Name"} type={"text"} placeholder={"John Doe"} onChange={(e) => {
                 setPostInputs(c => ({
                    ...c,
                    name : e.target.value
            }))}}/> : null}
            <LabelInput label={"Email"}  type={"email"} placeholder={"JohnDoe@example.com"} onChange={(e) => {
                 setPostInputs(c => ({
                    ...c,
                    email : e.target.value
            }))}}/>
            <LabelInput label={"Password"}  type={"password"} placeholder={"123456"} onChange={(e) => {
                 setPostInputs(c => ({
                    ...c,
                    password : e.target.value
            }))}}/>
             <button type="submit" className="text-white mt-4 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg w-screen sm:w-auto px-44 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => handleSubmit()}>{type === "Signin" ? "Sign In" : "Sign Up"}</button>
        </div>

    )
}

export default Auth

interface LabelInput {
    label:string,
    placeholder:string,
    type:string,
    onChange : (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabelInput ({label,placeholder,onChange,type}:LabelInput) {
    return <div className='m-2'>
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input onChange={onChange} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60vh] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>

}
