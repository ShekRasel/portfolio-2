import React from 'react'

function GetInform() {
  return (
    <div className='pt-24 pb-24 bg-gray-50 z-10' id='getinfo'>
        <div className="bg-[url('/image/1.png')] h-96 bg-contain bg-center border-none">
            <div className='w-full h-full bg-indigo-700 opacity-75 flex justify-center'>
                <div className='   h-full pb-24 pt-24 flex flex-col items-center justify-center px-6 '>
                    <h1 className='text-2xl md:text-4xl text-center font-extrabold text-white'>Have any project on mind?</h1>
                    <p className='text-white mt-2 text-center'>If you want to get services from me then you can hire me, and also download my cv from here for any needed.</p>
                    <div className='flex flex-col md:flex-row gap-6 mt-5 '>
                        <button className='bg-white px-10 py-3 rounded-full text-indigo-600  hover:bg-purple-600 hover:text-white transition-all ease-in-out duration-500'>Download CV</button>
                        <button className=' px-14 py-3 rounded-full text-white font-semibold border hover:bg-indigo-400 transition-all ease-in-out duration-500'>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInform