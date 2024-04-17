'use client'
import MedTools from "@/components/mycomponents/medTools";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Testimonials from "@/components/mycomponents/Testimonials";
import { Button } from "@/components/ui/button";


export default function Home() {

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
   <main>
   {/* <hr className="absolute border-red-700 border-2 my-2 top-[57px] w-full"/> */}
      {/* {toggleBar?<FaBars className="text-2xl text-[#064E3B] md:hidden absolute right-3 top-2" onClick={toggle}/>:<ImCross className="text-2xl text-[#064E3B] md:hidden absolute right-3 top-2" onClick={toggle}/>} */}
      
      {toggleBar?<FaBars className={toggleIconClassName} onClick={toggle}/>:<ImCross className={toggleIconClassName} onClick={toggle}/>}


    <nav className={`bg-[#C9EED6] top-0 w-full z-1 ${displayNav} md:flex md:flex-row md:justify-between flex-col justify-center items-center px-3 py-3 md:px-4 lg:px-24`}>
      <div className="text-red-900 text-2xl font-bold text-center"><Image src="/homepage/logo1.png" width={50} height={50} alt="logo here"></Image>
      </div>

      <div className="w-[200px] lg:w-[700px] text-[#064E3B] mx-auto md:mx-0 md:w-[600px]">
        <ul className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
          <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl" >Home</li></Link>
          <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Health library</li></Link>
          <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Symptoms checker</li></Link>
          <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Services</li></Link>
          <Link href={"#"}><li className="text-center mt-2 font-semibold text-xl">Login</li></Link>
        </ul>
      </div>
    </nav>
{/***************************************************  navbar Complete ********************************************* */}
{/***************************************************  HOMEPAGE STARTS ********************************************* */}
    <div className="flex flex-col md:flex-row justify-center items-center nex-space py-12">
      <div>
        <h2 className="text-[#064E3B] text-4xl font-extrabold ">{process.env.NEXT_PUBLIC_WEBSITE_NAME} - your personalized</h2>  <h2 className="text-[#064E3B] text-4xl font-extrabold w-full md:w-3/4 line mt-2">Health Companion</h2>
        <p className="mt-4 w-full md:w-2/3">{process.env.NEXT_PUBLIC_WEBSITE_NAME} offers seamless medical support , empowering individuals to take control of their health. Our innovative platform combines cutting edge technology with compassionate care , providing a complete solution for all your healthcare needs.</p>
      </div>
      <div>
        <Image src={"/homepage/home1.png"} height={800} width={800} className="my-6 md:my-0"></Image>
      </div>
    </div>

{/***************************************************  MED TOOLS STARTS ********************************************* */}
    <div className=" pt-12 pb-24 bg-[#064E3B]">
      <div className=" text-[#D1FAE5] mt-7 nex-space">
      <h1 className="text-left text-4xl md:text-5xl font-mono font-semibold ">Easy Healthcare Access</h1>
      <p className=" text-sm md:text-base mt-2">Navigate with ease and precision.</p>
      </div>
      <MedTools />
    </div>
{/***************************************************  TESTIIMONIALS STARTS ********************************************* */}

    <div id="testimonials">
      <Testimonials />
    </div>

{/***************************************************  VISION STARTS ********************************************* */}
    <div id="vision" className=" flex justify-center items-center h-[324px]  nex-care">
      <div className=" flex flex-col items-center justify-around  h-4/6 w-4/5">
        <h3 className="text-3xl font-bold text-[#064E3B] ">Our Vision</h3>
        <p className="text-center w-4/5">Our vision is to transform the healthcare industry with innovative technology that empowers patients to take control of their health and well-being.
        </p>
      <Button className={"bg-[#219571]"} size={"lg"}>Learn More</Button>
      </div>
    </div>

   </main>
   </>
  );
}
