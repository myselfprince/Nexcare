'use client'
import MedTools from "@/components/mycomponents/MedTools";
import Image from "next/image";
import Testimonials from "@/components/mycomponents/Testimonials";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/mycomponents/Navbar";


export default function Home() {
  return (
   <>
   <main>
    <Navbar />
{/***************************************************  HOMEPAGE STARTS ********************************************* */}
    <div className="flex flex-col md:flex-row justify-center items-center nex-space py-12 md:py-24">
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
