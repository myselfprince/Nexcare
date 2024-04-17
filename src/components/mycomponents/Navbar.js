'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const Navbar = () => {
    const [toggleBar, setToggleBar] = useState(true)
  const [displayNav, setDisplayNav] = useState("hidden")
  const toggleIconClassName = "text-2xl text-[#064E3B] md:hidden absolute right-3 top-2"
  const toggle=()=>{
    console.log("toggle bar")
    console.log(toggleBar)

    if(toggleBar){
      setToggleBar(false)
      setDisplayNav("flex")
    }
    else{ 
      setDisplayNav("hidden")
      setToggleBar(true)
    }
  }
    return (
        <>
        {toggleBar?<FaBars className={toggleIconClassName} onClick={toggle}/>:<ImCross className={toggleIconClassName} onClick={toggle}/>}
        <nav className={`bg-[#C9EED6] top-0 w-full z-1 ${displayNav} md:flex md:flex-row md:justify-between flex-col justify-center items-center px-3 py-3 md:px-4 lg:px-24`}>
        <div className="text-red-900 text-2xl font-bold text-center"><Image src="/homepage/logo.png" width={50} height={50} alt="logo here"></Image>
        </div>

        <div className="w-[200px] lg:w-[700px] text-[#064E3B] mx-auto md:mx-0 md:w-[600px]">
        <ul className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
            <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl" >Home</li></Link>
            <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Health library</li></Link>
            <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Symptoms checker</li></Link>
            <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Services</li></Link>
            <Link href={"/login"} target="_blank"><li className="text-center mt-2 font-semibold text-xl">Login</li></Link>
        </ul>
        </div>
  </nav>
    </>
  )
}

export default Navbar