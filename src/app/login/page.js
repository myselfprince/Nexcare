'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const Login = () => {
  const router = useRouter()
  

  const [user, setUser] = useState({
    email:"",
    password:"",
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLogin = async()=>{
    console.log("Hello")
    try {
        setLoading(true)
        const response = await axios.post("/api/users/login", user)
        console.log("Login Success", response.data)
          router.push('/profile')


    } catch (error) {
        console.log("Signup Failed");      
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>0){
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
          <Image height={500} width={399} className='h-[100%] w-auto' src={"/homepage/login.png"} alt='login image'/>
        </div>
        <div className='w-screen md:w-[500px] flex items-center justify-center'>
          <div className='w-3/4'>

         
          {/* login page */}
          <h1 className='text-center text-3xl font-mono text-wrap text-green-950'>Login</h1>
          <p className='text-center text-green-400 font-sans'>New User? <Link href={"/signup"}>Signup</Link> </p>

          <h2 className='border text-center text-3xl mt-7 font-semibold'>{loading?"Processing":"Login"}</h2>
          <div className="rounded px-8 pt-6 pb-8 mb-4">
       
        <div className="mb-12">
          <label className="block text-gray-500 text-[13px] mb-1" htmlFor="email">
            Please enter email
          </label>
            <Input type="email" placeholder="Email"
            id="email"
            name="email"
            value={user.email}
            onChange={(e)=>setUser({...user, email: e.target.value})}
            />
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
        </div>
        <div className="flex items-center justify-between">
     
          <Button onClick={onLogin} className="w-[80%] mx-auto bg-green-900 hover:bg-green-950">Login</Button>
        </div>
      </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login