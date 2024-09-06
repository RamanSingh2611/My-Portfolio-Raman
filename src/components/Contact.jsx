import React from 'react';
import { FaHeadset } from "react-icons/fa";


const Contact = () => {

    
  return (
    <div name='contact' className='w-full h-auto pt-10 bg-[#0a192f] flex justify-center items-center'>
                
        <form action="https://getform.io/f/avrelkya" method="POST" className='mx-4 flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit this form below or shoot me an email - ramanimp2003@gmail.com</p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-1 px-2' placeholder='Name' name='name'/>
            <input type="email" className='my-4 p-2 bg-[#ccd6f6]' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Leave me your message..' ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center gap-2'><FaHeadset size={22} />Get In Touch</button>
        </form>
    </div>
  )
}

export default Contact