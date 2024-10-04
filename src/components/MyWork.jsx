import React, { useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
import { HiLink } from "react-icons/hi2";

function MyWork() {
    const [state, setState] = useState(null);

    const showElement = (index) => {
        setState(index);
    };


    const hideElement = () => {
        setState(null);
    };

    const projects = [
        { image: '/image/project1.png', name: 'NFT Market Place' },
        { image: '/image/project2.png', name: 'Event Management System' },
        { image: '/image/project3.png', name: 'Education Landing page' },
        { image: '/image/insubordination-cover.webp', name: 'Education Landing page' },
        { image: '/image/1.png', name: 'Education Landing page' },
        { image: '/image/1.png', name: 'Education Landing page' },
    ];

    return (
        <div className='px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 pt-24 pb-24' id='portfolio'>
            <h1 className='text-4xl font-extrabold text-center'>My Recent Works</h1>
            <p className='text-center xl:px-36 text-gray-500 mt-8 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {projects.map((project, index) => (
                    <div
                        className='h-64 shadow-md bg-cover mt-10'
                        onMouseEnter={() => showElement(index)}
                        onMouseLeave={hideElement}
                        key={index}
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className='w-full h-full hover:bg-indigo-700 opacity-75 transition-all ease-in-out duration-500 flex justify-center'>
                            {state === index && (
                                <div className='flex flex-col items-center justify-center'>
                                    {/* Text Animation */}
                                    <div>
                                        <h1
                                            className={`text-white text-2xl font-bold transition-all ease-in-out duration-500`}
                                        >
                                            {project.name}
                                        </h1>
                                    </div>

                                    {/* Icons Animation */}
                                    <div className='flex gap-6 border-t pt-6 mt-6'>
                                        {/* Left Icon Animation */}
                                        <span
                                            className={`border text-xl rounded-full p-4 text-white hover:bg-white hover:text-indigo-700 transition-all ease-in-out duration-500 transform ${state === index ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                                        >
                                            <BsPlusLg />
                                        </span>

                                        {/* Right Icon Animation */}
                                        <span
                                            className={`border text-xl rounded-full p-4 text-white hover:bg-white hover:text-indigo-700 transition-all ease-in-out duration-500 transform ${state === index ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                        >
                                            <HiLink />
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-indigo-700 rounded-full px-12 mt-10 py-4 font-semibold text-white hover:bg-white hover:text-indigo-700 hover:border-indigo-600 hover:outline hover:outline-1 shadow-slate-400 shadow-md hover:shadow-indigo-700 transition-all ease-in-out duration-500'>More Works</button>
            </div>
        </div>
    );
}

export default MyWork;
