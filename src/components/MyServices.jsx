import React from 'react'

function MyServices() {
    const services = [{
        logo: 'logo/JavaScript Development.png',
        name : 'JavaScript Development',
        description : ' I create interactive elements and features on websites using JavaScript. From dynamic forms to animations and real-time updates, I bring web pages to life through engaging scripts.'
    },
    {
        logo: 'logo/Website Development.jpg',
        name : 'Website Development',
        description : ' I create responsive and visually appealing websites using HTML, CSS, and JavaScript. My focus is on ensuring that your site is functional across different devices and platforms.'
    },
    {
        logo: 'logo/Landing Page Creation.png',
        name : 'Landing Page Creation',
        description : " I design and develop optimized landing pages tailored to your business goals. Whether it's to capture leads, promote a product, or share a message, I ensure the landing page is effective and user-friendly."
    },
    {
        logo: 'logo/Web Performance Optimization.webp',
        name : 'Web Performance Optimization',
        description : ' I analyze and enhance website performance, focusing on speed and efficiency. This includes optimizing images, minifying code, and implementing best practices to ensure quick loading times.'
    },
    {
        logo: 'logo/Responsive Design.jpg',
        name : ' Responsive Design',
        description : ' I ensure that websites look great and function well on any device—be it a desktop, tablet, or smartphone. My responsive designs adapt to various screen sizes for a seamless user experience.'
    },
    {
        logo: 'logo/Git & Version Contro.png',
        name : 'Git & Version Control',
        description : "I offer to set up and manage version control systems using Git. This helps track changes, collaborate with others, and maintain a history of your project's development."
    }]
  return (
    <div className='px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80   pt-24 pb-24' id='service'>
        <h1 className='text-4xl font-extrabold text-center'>
            My Services
        </h1>
        <p className='text-center xl:px-36 text-gray-500 mt-8 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem recusandae obcaecati eos perferendis deleniti quia culpa. Laborum in ut a error iste? Accusantium delectus, dignissimos veritatis ut quae facilis!
        </p>
        <div className='mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {services.map((service,index)=>(
                <div key={index} className='flex border-t p-8 flex-col items-center rounded-md transition-all duration-300 ease-in-out shadow-md hover:shadow-lg  overflow-hidden'>
                    <img src={service.logo} alt="" className='w-20'/>
                    <h1 className='text-2xl font-semibold text-center mt-3'>{service.name}</h1>
                    <p className='font-semibold text-gray-500 mt-4'>
                        {service.description}
                    </p>
                </div>  
            ))}
        </div>
    </div>
  )
}

export default MyServices