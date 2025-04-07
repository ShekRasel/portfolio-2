import { CiCalendarDate } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import useInView from "./../hooks/useInView";
import { MdApi } from "react-icons/md";

function About() {
  const divRef = useRef(null);
  const isInView = useInView(divRef);

  const skills = [
    {
      name: "HTML",
      percentage: 70,
      color: "#e34c26", // Orange-Red
    },
    {
      name: "CSS",
      percentage: 70,
      color: "#264de4", // Blue
    },
    {
      name: "Tailwind Css",
      percentage: 80,
      color: "#0268fc", // Tailwind Blue
    },
    {
      name: "JavaScript",
      percentage: 60,
      color: "#f3cc06", // JS Yellow
    },
    {
      name: "ReactJs",
      percentage: 70,
      color: "#61dafb", // React Blue
    },
    {
      name: "Next Js",
      percentage: 50,
      color: "#000000", // Black
    },
    {
      name: "MongoDb",
      percentage: 20,
      color: "#4DB33D", // Mongo Green
    },
  ];
  

  const [animatedPercentage, setAnimatedPercentage] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    if (isInView) {
      const intervalId = setInterval(() => {
        setAnimatedPercentage((prev) =>
          prev.map((value, index) => {
            if (value < skills[index].percentage) {
              return Math.min(value + 1, skills[index].percentage);
            }
            return value;
          })
        );
      }, 40);

      return () => clearInterval(intervalId);
    }
  }, [isInView, skills]);
  return (
    <div
      className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 pt-24 bg-gray-50 pb-24"
      id="about"
    >
      
        <h1 className="text-4xl font-extrabold text-center  ">About Me</h1>
      

      
        <p className="text-center xl:px-36 text-gray-500 mt-8 font-semibold">
          Hi, I&apos;m Shek Rasel, a dedicated web developer with a passion for
          crafting dynamic and user-centric websites. I specialize in frontend
          technologies, leveraging modern frameworks to build seamless digital
          experiences.
        </p>
      

      <div className="md:flex xl:justify-evenly  gap-6 xl:gap-24 mt-10  items-center">
        <div className="md:w-1/2">
          
            <h1 className="text-2xl font-bold text-indigo-600 text-center xl:text-start">
              Hi There! I&apos;m Shek Rasel
            </h1>
          
          
            <p className="text-gray-500 font-semibold   mt-3 text-justify ">
              I strive to create innovative solutions that exceed expectations.
              My experience includes working on diverse projects, from
              small-scale applications to comprehensive systems. I&apos;m
              constantly learning and adapting to industry trends, ensuring that
              my skills remain cutting-edge. Outside of development, I enjoy
              problem-solving and collaborating with others to bring creative
              ideas to life.
            </p>
          
          <div className="flex pt-6   flex-col xl:flex-row xl:justify-between items-center md:items-start  gap-3 lg:gap-0">
            <div className="flex flex-col  gap-3 text-md 2xl:text-xl ">
              <p className="  font-semibold  flex items-center gap-2">
                <span className="">
                  <CiCalendarDate />
                </span>{" "}
                <span className="">Date of birth :</span>
                <span className="text-gray-500 font-thin"> 11 March 1999</span>
              </p>

              <p className="  font-semibold  flex items-center gap-2">
                <span className="">
                  <TfiEmail />
                </span>{" "}
                <span className="">Email :</span>
                <span className="text-gray-500 font-thin">
                  swe.rasel@gmail.com
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-3 text-md 2xl:text-xl w-56 lg:w-auto">
              <p className=" font-semibold  flex items-center gap-2">
                <span className="">
                  <IoCallOutline />
                </span>{" "}
                <span className="">Phone :</span>
                <span className="text-gray-500 font-thin"> 01648936921</span>
              </p>

              <p className="font-semibold  flex items-center gap-2">
                <span className="">
                  <MdApi/>
                </span>{" "}
                <span className="">Location :</span>
                <span className="text-gray-500 font-thin"> Gazipur,Dhaka</span>
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 " ref={divRef}>
          <div className="">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between pt-6">
                  <h1 className={` font-bold text-lg`}
                  style={{color:skill.color}}
                  >
                    {skill.name}
                  </h1>
                  <h1 className=" font-bold" style={{color:skill.color}}>
                    {animatedPercentage[index]}%
                  </h1>
                </div>
                <div className=" w-full mt-2 bg-gray-400 rounded-md flex items-center">
                  <div
                    className="rounded-md transition-all ease-out h-[8px]"

                    style={{ width: `${animatedPercentage[index]}%` , background : skill.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
