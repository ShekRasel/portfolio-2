import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className=' bg-slate-800  pt-32' id='footer'>
        <div className='flex flex-col justify-center items-center w-full lg:px-48'>
            <img src="logo/mylogo.jpg" className='w-20 rounded-md shadow-md border-indigo-700' />
            <p className='mt-12 text-center font-semibold text-white px-4 xl:px-32'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nulla tenetur commodi dignissimos saepe deserunt assumenda beatae omnis placeat suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum id iure eius praesentium suscipit!</p>
            <div className='flex gap-8 mt-8'>
                <span className='text-4xl p-5 rounded-full bg-slate-700 text-white hover:bg-indigo-600 transition-all ease-in-out duration-500'><RiFacebookFill/></span>
                <span className='text-4xl p-5 rounded-full bg-slate-700 text-white hover:bg-indigo-600 transition-all ease-in-out duration-500'><BsLinkedin/></span>
                <span className='text-4xl p-5 rounded-full bg-slate-700 text-white hover:bg-indigo-600 transition-all ease-in-out duration-500'><FaGithub/></span>
            </div>
        </div>

            <div className='mt-28 bg-slate-700 w-full'>
                <h1 className='text-center text-lg text-white font-semibold py-4'>Copyright © 2024. All rights reserved by Rasel!</h1>
            </div>
    </div>
  )
}

export default Footer