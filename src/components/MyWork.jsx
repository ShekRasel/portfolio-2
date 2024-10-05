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
        { image: 'image/project1.png', name: 'NFT Market Place',projectLink:'https://nft-market-place-chi-eight.vercel.app/' },

        { image: 'image/project2.png', name: 'Event Management System',projectLink:'https://frontend-eight-steel-19.vercel.app/' },

        { image: 'image/project3.png', name: 'Education Landing page',projectLink:'https://education-site-henna.vercel.app/' },

        { image: 'image/weather_og.png', name: 'Weather App',projectLink:'https://react-weather-app-silk-five.vercel.app/' },

        { image: 'image/youtube.png', name: 'YouTube Clone, html/css',projectLink:'https://youtube-clone-eight-sable.vercel.app/' },
        { image: 'image/1.png', name: 'Upcoming',projectLink:'' },
    ];

    return (
        <div className='px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 pt-24 pb-24' id='portfolio'>
            <h1 className='text-4xl font-extrabold text-center'>My Recent Works</h1>
            <p className='text-center xl:px-36 text-gray-500 mt-8 font-semibold'>
            Here’s a project I’ve worked on, showcasing my skills and experience in web development. You can visit it and explore the features and design in action by clicking the link below
            </p>
            <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {projects.map((project, index) => (
                    <div
                        className='h-64 shadow-lg bg-cover mt-10 rounded-lg hover:scale-105 ease-in-out transition-all duration-700'
                        onMouseEnter={() => showElement(index)}
                        onMouseLeave={hideElement}
                        key={index}
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className='w-full h-full hover:bg-indigo-900 opacity-75 transition-all ease-in-out duration-500 flex justify-center shadow-xl rounded-lg'>
                            {state === index && (
                                <div className='flex flex-col items-center justify-center overflow-hidden'>
                                    {/* Text Animation */}
                                    <div>
                                        <h1
                                            className={`text-white text-2xl font-extrabold font-serif`}
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
                                            
                                            <a href={project.projectLink}  target="_blank"
                                            rel="noopener noreferrer"><HiLink/></a>
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-indigo-700 rounded-full px-12 mt-14 py-4 font-semibold text-white hover:bg-white hover:text-indigo-700 hover:border-indigo-600 hover:outline hover:outline-1 shadow-slate-400 shadow-md hover:shadow-indigo-700 transition-all ease-in-out duration-500'>More Works</button>
            </div>
        </div>
    );
}

export default MyWork;
