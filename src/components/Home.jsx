import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Resume from '../assets/My Resume.pdf';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}

        <div className='max-w-[1000px] mx-auto px-8  flex flex-col justify-center gap-3 h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl md:text-7xl font-bold text-gray-50'>Raman Singh</h1>
            <h2 className='text-3xl md:text-5xl font-bold text-gray-400'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[750px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempore vero obcaecati porro labore nulla consequuntur autem,
                  tempora provident mollitia odio quo expedita culpa fuga recusandae
                   molestias aliquid sit delectus dolor.</p>
            <div className='flex gap-4'>
                <button className='text-white border-2 px-4 my-2 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                    <span className='hover:rotate-90 duration-300'>
                         <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
                <a href={Resume} download='My Resume' className='text-white border-2 px-4 my-2 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                Download CV 
                    <button className='hover:scale-0 duration-300' >
                         <FaCloudDownloadAlt className='ml-3'/>
                    </button>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Home