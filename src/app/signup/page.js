'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const SignupPage = () => {
  const router = useRouter()
  

  const [user, setUser] = useState({
    email:"",
    password:"",
    username:"",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSignup = async()=>{
    console.log("Hello")
    try {
        setLoading(true)
        const response = await axios.post("/api/users/signup", user)
        console.log("Signup Success", response.data)
          router.push('/login')


    } catch (error) {
        console.log("Signup Failed");      
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0 && user.username.length>0){
      setButtonDisabled(false)
    }
    else{
      setButtonDisabled(true)
    }
  },[user])
  return (
    <>
    <div className='mt-7 flex justify-center items-center'>
      <div className=' mx-auto flex justify-around items-center'>
        <div className='w-[500px] hidden lg:flex justify-end'>
          <Image height={500} width={399} className='h-[100%] w-auto' src={"/homepage/login.png"}/>
        </div>
        <div className='w-screen md:w-[500px] flex items-center justify-center'>
          <div className='w-3/4'>

         
          {/* signup page */}
          <h1 className='text-center text-3xl font-mono text-wrap text-green-950'>Create New <br /> Account</h1>
          <p className='text-center text-green-400 font-sans'>Already Registered? <Link href={"#"}>Login</Link> </p>
          <h2 className='border text-center text-3xl mt-7 font-semibold'>{loading?"Processing":"Signup"}</h2>
          <div className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">


          <label className="block text-gray-500 text-[13px] mb-1" htmlFor="username">
            Please enter your username
          </label>
          <Input type="text" placeholder="Username"
            id="username"
            name="username"
            value={user.username}
            onChange={(e)=>setUser({...user, username: e.target.value})}
            />
            {/* <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            /> */}

        </div>


        <div className="mb-4">
          <label className="block text-gray-500 text-[13px] mb-1" htmlFor="email">
            Please enter email
          </label>
          <Input type="email" placeholder="Email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e)=>setUser({...user, email: e.target.value})}
            />
          {/* <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /> */}
        </div>


        <div className="mb-6">
          <label className="block text-gray-500 text-[13px] mb-1" htmlFor="password">
            Please enter password
          </label>
          <Input type="password" placeholder="Password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e)=>setUser({...user, password: e.target.value})}
              />
          {/* <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            value={formData.password}
            onChange={handleChange}
          /> */}
        </div>

        <div className="flex items-center justify-between">
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // type="submit"
            onClick={onSignup}
          >
            Sign Up
          </button> */}

          {/* 
          CAN BE USED TO DISABLE BUTTON
          disabled={buttonDisabled?true:false} */}

          <Button className="w-[80%] mx-auto bg-green-900 hover:bg-green-950" 
          onClick={onSignup}>Signup</Button>
        </div>
      </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SignupPage