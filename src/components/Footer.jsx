
import { RiFacebookFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import {motion} from 'motion/react'
function Footer() {
  return (
    <div className=' bg-[#152136]  pt-32' id='footer'>
        <div className='flex flex-col justify-center items-center w-full lg:px-48'>
            <img src="logo/mylogo.jpg" className='w-20 rounded-md shadow-md border-indigo-700' />
            
            <motion.p 
            initial={{opacity:0,scale:0}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.5 , delay:0.3 , ease:'easeInOut'}}
            viewport={{once:true}}
            
            className='mt-12 text-center font-semibold text-white px-4 xl:px-32'>Thank you for visiting my portfolio! I’m Shek Rasel, a passionate front-end developer from Gazipur, Bangladesh, dedicated to building beautiful and functional websites. Whether you’re looking for someone to bring your digital ideas to life, need advice on web development, or simply want to connect, I’m always excited to collaborate and create.</motion.p>
            
            <div className='flex gap-8 mt-8'>
                <span className='text-4xl p-5 rounded-full bg-slate-700 text-white hover:bg-indigo-600 transition-all ease-in-out duration-500'><a href="https://web.facebook.com/profile.php?id=100008095329308"><RiFacebookFill/></a></span>
                <span className='text-4xl p-5 rounded-full bg-slate-700 text-white hover:bg-indigo-600 transition-all ease-in-out duration-500'><a href="https://www.linkedin.com/in/shek-rasel/"><BsLinkedin/></a></span>
                <span className='text-4xl p-5 rounded-full bg-slate-700 text-white hover:bg-indigo-600 transition-all ease-in-out duration-500'><a href="https://github.com/ShekRasel"><FaGithub/></a></span>
            </div>
        </div>

            <div className='mt-28 bg-slate-700 w-full'>
                <h1 className='text-center text-lg text-white font-semibold py-4'>Copyright © 2024. All rights reserved by Rasel!</h1>
            </div>
    </div>
  )
}

export default Footer