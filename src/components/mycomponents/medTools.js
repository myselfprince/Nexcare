import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiIfood } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMedicines } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { BiAlarm } from "react-icons/bi";
import { IoGitNetworkOutline } from "react-icons/io5";

// const MedTools = () => {
//     const icon_class = "text-5xl mr-2 text-[#65A30D]";
//   return (<>
//   <div className="text-[#D1FAE5] mt-16">
//   <div className="flex justify-around my-4">
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <IoShieldCheckmarkOutline className={icon_class}/>
//         <div>
//             <h3>Symptoms Checker</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <FiUserCheck className={icon_class}/>
//         <div>
//             <h3>Medical History</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <LuClipboardCheck className={icon_class}/>
//         <div>
//             <h3>Doctor Appointment</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     </div>
//   <div className="flex justify-around my-4">
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <MdOutlinePeopleAlt className={icon_class}/>
//         <div>
//             <h3>Community Forums</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <RiMentalHealthLine className={icon_class}/>
//         <div>
//             <h3>Mental Health Support</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <MdOutlineHealthAndSafety className={icon_class}/>
//         <div>
//             <h3>Report Generation</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     </div>
//   <div className="flex justify-around my-4">
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <SiIfood className={icon_class}/>
//         <div>
//             <h3>Nutrients & Exercise</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <TbTruckDelivery className={icon_class}/>
//         <div>
//             <h3>Medicine Delivery</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <BiAlarm className={icon_class}/>
//         {/* < className={icon_class}/> */}
//         <div>
//             <h3>Medication Remainder</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     </div>
//   <div className="flex justify-around my-4">
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <FaUserDoctor className={icon_class}/>
//         <div>
//             <h3>Appointment Remainder</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <IoGitNetworkOutline className={icon_class}/>
//         <div>
//             <h3>Emergency Response Integration</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     <div className="flex justify-start items-center my-2 lg:w-[24vw] w-[332px]">
//         <GiMedicines className={icon_class}/>
//         <div>
//             <h3>Health Education Resourse</h3>
//             <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
//         </div>
//         </div>
//     </div>
//   </div>
//     </>
//   )
// }

// export default MedTools

const MedTools = () => {
    const icon_class = "text-5xl mr-5 md:mr-3 text-[#65A30D]";
    return (
        <div className="text-[#D1FAE5] mt-9 md:mt-16 nex-space">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex justify-start items-center my-2 lg:w-[24vw] ">
                    <IoShieldCheckmarkOutline className={icon_class} />
                    <div>
                        <h3>Symptoms Checker</h3>
                        <p className="text-[13px]">Enter Symptoms, Get medical suggestions</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <FiUserCheck className={icon_class} />
                    <div>
                        <h3>Medical History</h3>
                        <p className="text-[13px]">View and manage your medical record securely</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw] -ml-1">
                    <LuClipboardCheck className={icon_class} />
                    <div>
                        <h3>Doctor Appointment</h3>
                        <p className="text-[13px]">Easily schedule appointments with healthcare professionals online </p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <MdOutlinePeopleAlt className={icon_class} />
                    <div>
                        <h3>Community Forums</h3>
                        <p className="text-[13px]">Connect with others for advice and support</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <RiMentalHealthLine className={icon_class} />
                    <div>
                        <h3>Mental Health Support</h3>
                        <p className="text-[13px]">Access resources for mental and emotional wellness</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <MdOutlineHealthAndSafety className={icon_class} />
                    <div>
                        <h3>Report Generation</h3>
                        <p className="text-[13px]">Instantly create detailed medical reports for streamlined patient care</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <SiIfood className={icon_class} />
                    <div>
                        <h3>Nutrients & Exercise</h3>
                        <p className="text-[13px]">Get personalized nutrients and exercise  </p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <TbTruckDelivery className={icon_class} />
                    <div>
                        <h3>Medicine Delivery</h3>
                        <p className="text-[13px]">Get your prescribed medications delivered 
right to your doorstep</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <BiAlarm className={icon_class} />
                    <div>
                        <h3>Medication Remainder</h3>
                        <p className="text-[13px]">Never miss a dose with personalized medication reminders and alarms.</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <FaUserDoctor className={icon_class} />
                    <div>
                        <h3>Appointment Remainder</h3>
                        <p className="text-[13px]">Timely alerts for medical appointments</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <IoGitNetworkOutline className={icon_class} />
                    <div>
                        <h3>Emergency Response Integration</h3>
                        <p className="text-[13px]">Quick access to emergency contacts and facilities</p>
                    </div>
                </div>
                <div className="flex justify-start items-center my-2 lg:w-[24vw]">
                    <GiMedicines className={icon_class} />
                    <div>
                        <h3>Health Education Resourse</h3>
                        <p className="text-[13px]">Articles,videos and tools for wellness</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedTools;

