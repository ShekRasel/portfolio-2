import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { SlCallIn } from "react-icons/sl";
import { AiTwotoneMail } from "react-icons/ai";

function Contact() {
    const contacts = [{logo:<IoLocationOutline />,name:'Address',info:'Gazipur, Dhaka Bangladesh'},
        {logo:<SlCallIn />,name:'Phone',info:'01648936921',info2:'01891741554'},
        {logo:<AiTwotoneMail />,name:'Email',info:'swe.rasel@gmail.com',info2:'mdr889299@gmail.com'},
    ]
  return (
    <div className='px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-80 bg-gray-50  pt-24 pb-24' id='contact'>
        <h1 className='text-4xl font-extrabold text-center'>Get In Touch</h1>
        <p className='text-center xl:px-36 text-gray-500 mt-8 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad exercitationem recusandae obcaecati eos perferendis deleniti quia culpa. Laborum in ut a error iste? Accusantium delectus, dignissimos veritatis ut quae facilis!</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
            {contacts.map((contact,index)=>(
                <div key={index} className='p-7 border shadow-md flex flex-col items-center justify-center gap-2 transition-all ease-in-out duration-500 hover:shadow-lg'>
                    <span className='text-indigo-500 text-4xl'>{contact.logo}</span>
                    <h1 className='text-xl font-semibold text-center'>{contact.name}</h1>
                    <p className='text-gray-500 text-center'>{contact.info}</p>
                    <p className='text-gray-500 text-center'>{contact.info2}</p>
                    
                </div>
            ))}
        </div>

        <div className='mt-16 lg:flex gap-8 w-full'>
            <div className='lg:w-1/2'>
                <form className='flex flex-col'>
                    <input type="text" className='shadow-sm border px-6 py-4 text-gray-500 font-semibold' placeholder='Name'/>
                    <input type="text" className='shadow-sm border px-6 py-4 text-gray-500 font-semibold mt-8' placeholder='Email'/>
                    <textarea name="" id="" className=' text-gray-500 font-semibold mt-8 border px-6 py-4' placeholder='Message'></textarea>
                    <div className='flex justify-center'>
                    <button className='mt-10  text-white bg-indigo-600 px-10 py-3 rounded-full shadow-indigo-600 shadow-md transition-all ease-in-out duration-500 hover:bg-white font-semibold hover:outline-indigo-600 hover:outline-1 hover:text-indigo-600'>Send Message</button>
                    </div>
                </form>
            </div>
            <div className='lg:w-1/2 mt-10 lg:mt-0'>
                <div className='w-full h-full p-2 bg-white'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116640.05313049143!2d90.31646832719922!3d23.995718466632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dafdd8aa72a1%3A0xe3a23793cb030fdb!2sGazipur!5e0!3m2!1sen!2sbd!4v1727885709376!5m2!1sen!2sbd" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact