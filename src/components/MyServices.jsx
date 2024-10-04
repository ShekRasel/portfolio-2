import React from 'react'

function MyServices() {
    const services = [{
        logo: 'logo/1674840921638.jpeg',
        name : 'WebDevelopment',
        description : 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.'
    },
    {
        logo: 'logo/7e5d06ec.jpg',
        name : 'WebDevelopment',
        description : 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.'
    },
    {
        logo: 'logo/images.png',
        name : 'WebDevelopment',
        description : 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.'
    },
    {
        logo: 'logo/logo_maker_design_app02.jpg',
        name : 'WebDevelopment',
        description : 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.'
    },
    {
        logo: 'logo/movie-film-editor-logo-design-video-editing-logo-concept-free-vector.jpg',
        name : 'WebDevelopment',
        description : 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.'
    },
    {
        logo: 'logo/movie-film-editor-logo-design-video-editing-logo-concept-free-vector.jpg',
        name : 'WebDevelopment',
        description : 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt.'
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