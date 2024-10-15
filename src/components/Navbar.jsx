import React, { useState } from 'react'
import { LiaBarsSolid } from "react-icons/lia";
import { TfiClose } from "react-icons/tfi";
import { Link } from 'react-scroll';

function Navbar() {
    const [bgHeight,setBgHeight] = useState(false);
    const [hamBurger,setHamBurger] = useState(false);
    const [line , setLine] = useState(null);
    const [hoverLine, setHoverLine] = useState(null);

    const showLine = (index) => {
        setHoverLine(index);
    }
    
    const hideLine = () => {
        setHoverLine(null);
    }
    
    const setActiveLine = (index) => {
        setLine(index);
    }
    

    const changeHamBurger = ()=>{
        setHamBurger(!hamBurger);
    }

    const handleClick = ()=>{
        setHamBurger(false);
    }
    
    const changeNavHeigh = ()=>{
        if(window.scrollY > 2){
            setBgHeight(true);
        }else{
            setBgHeight(false);
        }
    }
    window.addEventListener('scroll',changeNavHeigh);
  return (
    <div className='fixed w-full z-50'>

        <div className={` px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80  shadow-lg w-full bg-white transition-all duration-500 ease-in-out ${bgHeight ? 'py-3 lg:py-0': 'py-5 lg:py-2'}`}>
            <div className={`flex justify-between items-center `}>
                <div className=''>
                    <img src="logo/mylogo.jpg" className='w-20 rounded-md shadow-md' />
                </div>
                <div className='hidden lg:block  h-full '>

                    <ul className='flex gap-8 text-gray-500 text-lg font-semibold '>
                        {[
                            { name: "HOME", path: "home" },
                            { name: "ABOUT", path: "about" },
                            { name: "SERVICES", path: "service" },
                            { name: "PORTFOLIO", path: "portfolio" },
                            { name: "CONTACT", path: "contact" }
                        ].map((item, index) => (
                            <li
                                key={index}
                                className='flex flex-col items-center h-full pb-8'
                                onMouseEnter={() => showLine(index)}
                                onMouseLeave={hideLine}
                            >
                                <div className='h-8'>
                                    <div className={`bg-indigo-600 w-1 transition-all ease-out duration-500 ${line === index || hoverLine === index ?'h-full' : 'h-0'}`}>
                                        <p className='opacity-0'>.</p>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className='cursor-pointer'
                                    activeClass= 'text-indigo-600 font-bold'
                                    onSetActive={() => setActiveLine(index)}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='lg:hidden' onClick={changeHamBurger}>
                    <span className=' text-4xl'>
                        {/* Hamburger Icon */}
                        <LiaBarsSolid
                        className={` absolute transition-all duration-1000 ease-in-out transform ${
                            hamBurger ? 'opacity-0  scale-0' : 'opacity-100 scale-105'
                        }`}
                        />

                        {/* Close Icon */}
                        <TfiClose
                        className={` transition-all duration-1000 ease-in-out transform ${
                            hamBurger ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                        }`}
                        />
                    </span>
                </div>
            </div>
        </div>

        <div className={`mt-1 transition-[max-height] duration-500 px-4 md:px-12 lg:hidden ease-in-out overflow-hidden ${hamBurger ? 'max-h-96' : 'max-h-0'}`}>
            <div className='bg-white px-4 py-4 font-semibold text-lg flex flex-col gap-2 shadow-lg rounded-md'>
                <ul className=' flex flex-col gap-4 md:gap-6 text-gray-500 text-lg font-semibold pl-6'>
                <ul className='flex flex-col gap-8 text-gray-500 text-lg font-semibold '>
                        {[
                            { name: "HOME", path: "home" },
                            { name: "ABOUT", path: "about" },
                            { name: "SERVICES", path: "service" },
                            { name: "PORTFOLIO", path: "portfolio" },
                            { name: "CONTACT", path: "contact" }
                        ].map((item, index) => (
                            <li key={index}>
                                <div>
                                    <Link
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className='cursor-pointer'
                                    activeClass= 'text-indigo-600 font-bold'
                                    onClick={handleClick}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar