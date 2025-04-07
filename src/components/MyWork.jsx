import { useRef, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiLink } from "react-icons/hi2";
import { motion, useInView } from "motion/react";
function MyWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [state, setState] = useState(null);
  const [visible, setVisible] = useState(6);

  const showElement = (index) => {
    setState(index);
  };

  const hideElement = () => {
    setState(null);
  };

  const projects = [
    {
      image: "image/ecommere.png",
      name: "Synzo Ecommerce site",
      projectLink: "https://ecommerce-site-two-drab.vercel.app/",
    },

    {
      image: "image/expense.png",
      name: "Expense Tracker",
      projectLink: "https://expense-tracker-mu-puce.vercel.app/",
    },
    {
      image: "image/cryptoland.png",
      name: "Cryptoland",
      projectLink: "https://cryptoland-chi.vercel.app/",
    },

    {
      image: "image/project1.png",
      name: "NFT Market Place",
      projectLink: "https://nft-market-place-chi-eight.vercel.app/",
    },
    {
      image: "image/hotel.png",
      name: "Hotel management",
      projectLink: "https://da-hotel-website.vercel.app/",
    },

    {
      image: "image/project2.png",
      name: "Event Management System",
      projectLink: "https://frontend-eight-steel-19.vercel.app/",
    },

    {
      image: "image/project3.png",
      name: "Education Landing page",
      projectLink: "https://education-site-henna.vercel.app/",
    },

    {
      image: "image/weather_og.png",
      name: "Weather App",
      projectLink: "https://react-weather-app-silk-five.vercel.app/",
    },

    {
      image: "image/youtube.png",
      name: "YouTube Clone, html/css",
      projectLink: "https://youtube-clone-eight-sable.vercel.app/",
    },
    
    
  ];

  return (
    <div
      className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 pt-6 pb-24"
      id="portfolio"
      ref={ref}
    >
      <div className=" flex justify-center items-center  relative overflow-x-hidden   w-full min-h-44">
        <motion.h1
          initial={{ x: "100vw", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: "100%" } : {}}
          transition={{ duration: 1 }}
          className="text-4xl  font-extrabold  top-0 absolute"
        >
          My Recent Works
        </motion.h1>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center xl:px-36 text-gray-500 top-16 absolute font-semibold"
        >
          Here’s a project I’ve worked on, showcasing my skills and experience
          in web development. You can visit it and explore the features and
          design in action by clicking the link below
        </motion.p>
      </div>

      <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.slice(0, visible).map((project, index) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{scale:1, opacity:1}}
            viewport={{once:true}}
            transition={{ delay: index * 0.2, ease: "easeInOut" }}
            className="h-64 shadow-lg bg-cover mt-10 rounded-lg hover:scale-105 ease-in-out transition-all duration-700"
            onMouseEnter={() => showElement(index)}
            onMouseLeave={hideElement}
            key={index}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="w-full h-full hover:bg-indigo-900 opacity-75 transition-all ease-in-out duration-500 flex justify-center shadow-xl rounded-lg">
              {state === index && (
                <div className="flex flex-col items-center justify-center overflow-hidden">
                  {/* Text Animation */}
                  <div>
                    <h1
                      className={`text-white text-2xl font-extrabold font-serif`}
                    >
                      {project.name}
                    </h1>
                  </div>

                  {/* Icons Animation */}
                  <div className="flex gap-6 border-t pt-6 mt-6">
                    {/* Left Icon Animation */}
                    <span
                      className={`border text-xl rounded-full p-4 text-white hover:bg-white hover:text-indigo-700 transition-all ease-in-out duration-500 transform ${
                        state === index
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                    >
                      <BsPlusLg />
                    </span>

                    {/* Right Icon Animation */}
                    <span
                      className={`border text-xl rounded-full p-4 text-white hover:bg-white hover:text-indigo-700 transition-all ease-in-out duration-500 transform ${
                        state === index
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                    >
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HiLink />
                      </a>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {projects.length > visible && (
            <motion.button
            initial={{y:20}}
            whileInView={{y:0}}
            viewport={{once:true}}
              onClick={() => setVisible(projects.length)}
              className="bg-indigo-700 rounded-full px-12 mt-14 py-4 font-semibold text-white hover:bg-white hover:text-indigo-700 hover:border-indigo-600 hover:outline hover:outline-1 shadow-slate-400 shadow-md hover:shadow-indigo-700 transition-all ease-in-out duration-500"
            >
              More Works ...
            </motion.button>
        )}
      </div>
    </div>
  );
}

export default MyWork;
