import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

function MyServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const services = [
    {
      logo: "logo/JavaScript Development.png",
      name: "JavaScript Development",
      description:
        " I create interactive elements and features on websites using JavaScript. From dynamic forms to animations and real-time updates, I bring web pages to life through engaging scripts.",
    },
    {
      logo: "logo/Website Development.jpg",
      name: "Website Development",
      description:
        " I create responsive and visually appealing websites using HTML, CSS, and JavaScript. My focus is on ensuring that your site is functional across different devices and platforms.",
    },
    {
      logo: "logo/Landing Page Creation.png",
      name: "Landing Page Creation",
      description:
        " I design and develop optimized landing pages tailored to your business goals. Whether it's to capture leads, promote a product, or share a message, I ensure the landing page is effective and user-friendly.",
    },
    {
      logo: "logo/Web Performance Optimization.webp",
      name: "Web Performance Optimization",
      description:
        " I analyze and enhance website performance, focusing on speed and efficiency. This includes optimizing images, minifying code, and implementing best practices to ensure quick loading times.",
    },
    {
      logo: "logo/Responsive Design.jpg",
      name: " Responsive Design",
      description:
        " I ensure that websites look great and function well on any device—be it a desktop, tablet, or smartphone. My responsive designs adapt to various screen sizes for a seamless user experience.",
    },
    {
      logo: "logo/Git & Version Contro.png",
      name: "Git & Version Control",
      description:
        "I offer to set up and manage version control systems using Git. This helps track changes, collaborate with others, and maintain a history of your project's development.",
    },
  ];
  return (
    <div
      className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80   pt-24 pb-24"
      id="service"
    >
      {useInView}

      <motion.h1
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView && { opacity: 100, scale: "100%" }}
        transition={{ ease:"easeInOut", duration: 1, delay: 0 }}
        className="text-4xl font-extrabold text-center"
      >
        My Services
      </motion.h1>

      
        <p className="text-center xl:px-36 text-gray-500 mt-8 font-semibold">
          I offer a range of front-end web development services, including
          creating responsive websites, building interactive user interfaces,
          and optimizing performance for a seamless user experience. Whether
          you&apos;re looking for a custom design or need to bring your ideas to
          life, I&apos;m here to help you create stunning and functional
          websites.
        </p>
      
        <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
            initial={{y:200, opacity:0}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:0.2}}
            transition={{ease:'linear',delay:(index*0.12)}}
              key={index}
              className="flex  p-8 flex-col items-center rounded-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg  overflow-hidden"
            >
              <img src={service.logo} alt="" className="w-20 rounded-full " />
              <h1 className="text-2xl font-bold text-center mt-3">
                {service.name}
              </h1>
              <p className="font-semibold text-gray-500 mt-4 text-justify">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
    </div>
  );
}

export default MyServices;
