
import { CiCalendarDate } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import useInView from './../hooks/useInView';


function About() {

  const divRef = useRef(null);
  const isInView = useInView(divRef);

  const skills = [{
    name: 'HTML',percentage : 80
  },{
    name: 'CSS',percentage : 60
  },{
    name: 'JavaScript',percentage : 50
  },{
    name: 'ReactJs',percentage : 60
  },];

  const [animatedPercentage, setAnimatedPercentage] = useState(skills.map((skill)=>{return 0;}));

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
    } else {
     
      setAnimatedPercentage(skills.map(() => 0));
    }
  }, [isInView]);


  return (
    <div className='px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 pt-24 bg-gray-50 pb-24' id="about">
      <h1 className='text-4xl font-extrabold text-center'>About Me</h1>
      <p className='text-center xl:px-36 text-gray-500 mt-8 font-semibold'>Hi, I'm Shek Rasel, a dedicated web developer with a passion for crafting dynamic and user-centric websites. I specialize in frontend technologies, leveraging modern frameworks to build seamless digital experiences.</p>

      <div className='xl:flex xl:justify-between mt-10  items-center'ref={divRef}>
        <div className='xl:w-1/2'>
          <h1 className='text-2xl font-semibold text-indigo-600 text-center xl:text-start'>Hi There! I'm Shek Rasel</h1>
          <p className='text-gray-500 font-semibold text-center xl:text-start mt-3'>I strive to create innovative solutions that exceed expectations. My experience includes working on diverse projects, from small-scale applications to comprehensive systems. I'm constantly learning and adapting to industry trends, ensuring that my skills remain cutting-edge. Outside of development, I enjoy problem-solving and collaborating with others to bring creative ideas to life.</p>
          <div className='flex flex-col xl:flex-row xl:justify-between xl:gap-2 items-center xl:items-start'>
            <div className=''>
              <p className='mt-4 text-xl font-semibold text-indigo-600 flex items-center gap-2'>
                <span className='shadow-md'><CiCalendarDate/></span> <span className=''>Date of birth :</span><span className='text-gray-500 font-thin'> 11 March 1999</span>
              </p>

              <p className='mt-2 text-xl font-semibold text-indigo-600 flex items-center gap-2'>
                <span className='shadow-md'><TfiEmail/></span> <span className=''>Email :</span><span className='text-gray-500 font-thin'>swe.rasel@gmail.com</span>
              </p>

            </div>
            <div className='mr-8 xl:mr-0'>
            <p className='xl:mt-4 mt-2 text-xl font-semibold text-indigo-600 flex items-center gap-2'>
                <span className='shadow-md'><IoCallOutline/></span> <span className=''>Phone :</span><span className='text-gray-500 font-thin'> 01648936921</span>
              </p>

              <p className='mt-2 text-xl font-semibold text-indigo-600 flex items-center gap-2'>
                <span className='shadow-md'><CiLocationOn/></span> <span className=''>Location :</span><span className='text-gray-500 font-thin'> Gazipur,Dhaka</span>
              </p>
            </div>
          </div>
        </div>

        <div className='xl:w-1/2 xl:pl-12'>
          <div className="">
            {skills.map((skill,index)=>(
              <div key={index}>
                <div className="flex justify-between pt-6">
                  <h1>{skill.name}</h1>
                  <h1>{animatedPercentage[index]}%</h1>
                </div>
                <div className=' w-full mt-2 bg-gray-400 rounded-md flex items-center'>
                <div
                    className="rounded-md transition-all ease-out h-[6px] bg-indigo-600"
                    style={{ width: isInView ? `${animatedPercentage[index]}%` : '0' }}
                  >
                  </div>
                </div>   
              </div>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About