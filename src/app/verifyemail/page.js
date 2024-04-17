'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from "react-hot-toast"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'


const VerifyEmail = () => {
  const router = useRouter()
  
  const [token, setToken] = useState("")
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState(false)

  const verifyUserEmail=async ()=>{
    try {
      await axios.post("/api/users/verifyemail", {token})
      setVerified(true)
      
    } catch (error) {
      setError(true)
      console.log(error.response.data)
      
    }
  }

  useEffect(()=>{
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "")
  },[])


  useEffect(()=>{
    if(token.length>0){
      verifyUserEmail()
    }
  },[token])

  return (
    <>
    {/* <div className='mt-7 flex justify-center items-center'>
      <div className=' mx-auto flex justify-around items-center'>
        <div className='w-[500px] hidden lg:flex justify-end'>
         
        </div>
        <div className='w-screen md:w-[500px] flex items-center justify-center'>
          <div className='w-3/4'>

         
          <h1 className='text-center text-3xl font-mono text-wrap text-green-950'>Verify Email</h1>
         <h3 className='text-center'>{token?`${token}`:"Token Not Found"}</h3>
         <Button className="w-[80%] mx-auto bg-green-900 hover:bg-green-950" disabled={token?false:true}>{token?"Visit Login":"Verify Email to Login"}</Button>

        </div>
        </div>
      </div>
      </div> */}
      <div className='text-center flex flex-col justify-center items-center h-screen'>
      <h1 className='text-center text-3xl font-mono text-wrap text-green-950 py-2'>Verify Email</h1>
      <h3 className='text-center py-2'>{token?`${token}`:"Token Not Found"}</h3>
         <Button type='button' className="w-[250px] mx-auto bg-green-900 hover:bg-green-950 py-2" disabled={token?false:true}><Link href={"/login"}>{token?"Visit Login":"Verify Email to Login"}</Link></Button>
         {/* <button type="button" className=' border-2 border-black bg-blue-500'>Click Me!</button> */}

      </div>


    </>
  )
}

export default VerifyEmail