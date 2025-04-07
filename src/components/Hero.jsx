import { RiFacebookFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { IoMdArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import { motion } from "motion/react";
function Hero() {
  return (
    <div
      className=" px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 pt-28 pb-28 2xl:pt-48 2xl:pb-36 flex lg:justify-between items-center"
      id="home"
    >
      <div className="ml-10 md:ml-20 lg:ml-0">
        <motion.h1
          initial={{ x: -600 }}
          transition={{ ease: ["easeInOut"], duration: 1 }}
          animate={{ x: 0 }}
          className="text-2xl md:text-4xl font-semibold text-indigo-700"
        >
          HELLO, I&apos;M
        </motion.h1>

        <motion.h1
          initial={{ x: -700 }}
          transition={{ ease: ["easeInOut"], delay: 0.2, duration: 1 }}
          animate={{ x: 0 }}
          className="text-4xl md:text-6xl font-semibold mt-3"
        >
          SHEK RASEL
        </motion.h1>
        <motion.h2
          initial={{ x: -600 }}
          transition={{ ease: ["easeInOut"], delay: 0.3, duration: 1 }}
          animate={{ x: 0 }}
          className="text-gray-500 mt-4 text-lg font-semibold"
        >
          JavaScript Developer
        </motion.h2>

        <motion.button
          initial={{ x: -550 }}
          transition={{ ease: ["easeInOut"], duration: 1 }}
          animate={{ x: 0 }}
          className="bg-indigo-600 py-4 px-6 rounded-full mt-10 text-white shadow-lg shadow-indigo-500 hover:bg-slate-50 hover:text-black hover:border-indigo-700 hover:outline-indigo-700 hover:outline-1 hover:outline transition-all ease-in-out duration-500 font-semibold"
        >
          <Link className="flex gap-4 items-center" to="portfolio">
            VIEW MY WORK <IoMdArrowDown className="text-2xl animate-bounce" />
          </Link>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: "100%", scale: "100%" }}
          transition={{ duration: 1, delay: 0.2, ease: ["easeInOut"] }}
          className=" mt-44 flex gap-2"
        >
          <div className="w-1/4  border-t-2 mt-5 border-indigo-600"></div>
          <div className="flex gap-3 md:gap-4">
            <span className="border rounded-full p-1 md:p-2 md:text-2xl hover:bg-indigo-600 transition-all ease-in-out duration-500 hover:text-white opacity-50 hover:opacity-100">
              <a href="https://web.facebook.com/profile.php?id=100008095329308">
                <RiFacebookFill />
              </a>
            </span>
            <span className="border rounded-full p-1 md:p-2 md:text-2xl hover:bg-indigo-600 transition-all ease-in-out duration-500 hover:text-white opacity-50 hover:opacity-100">
              <a href="https://www.linkedin.com/in/shek-rasel/">
                <BsLinkedin />
              </a>
            </span>
            <span className="border rounded-full p-1 md:p-2 md:text-2xl hover:bg-indigo-600 transition-all ease-in-out duration-500 hover:text-white opacity-50 hover:opacity-100">
              <a href="https://github.com/ShekRasel">
                <FaGithub />
              </a>
            </span>
          </div>
          <div className="w-1/4  border-t-2 mt-5 border-indigo-600"></div>
        </motion.div>
      </div>
      <div className="hidden  lg:block xl:mr-40 relative overflow-hidden pr-1">
        <motion.div
          initial={{ scale:0 }}
          animate={{ scale:1 }}
          transition={{ ease: ["easeInOut"], delay: 0.2, duration: 1 }}
          className="  "
        >
          <img
            src="image/profile.jpg"
            alt=""
            className="w-[420px] h-[570px] z-40"
          />
          <div className="h-6 bg-indigo-600 absolute bottom-0 mb-4 w-full"></div>
          <div className=" bg-indigo-600 absolute top-0 right-0 w-1 h-5/6 mt-16"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
