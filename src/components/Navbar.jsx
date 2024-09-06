import React, {useState} from 'react';
import {FaBars, FaTimes, FaLinkedin, FaGithub, } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import Logo from '../assets/logo1.png';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { PiChatTeardropDuotone, PiChatTeardropDotsBold } from "react-icons/pi";
import { Link } from 'react-scroll';
import Resume from '../assets/My Resume.pdf';

const Navbar = () => {
    const [nav, SetNav] = useState(false);
    const handleClick = () => SetNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" className='h-[250px] pt-5 '/>
        </div>

        {/* menu */}

        <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='project' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

        
        {/* Hamburger */}

        

        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        

        {/* Mobile Menu */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li  className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li className='py-6 text-4xl'>          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Project
          </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>         

          </li>
          
                <li className='w-[130px]  h-[30px] flex justify-between items-center  bg-blue-800'>
                    <a className='flex text-sm justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/raman-singh-315675231/">
                    LinkedIn <FaLinkedin size={20}/>
                    </a>
                </li>
                <li className=' w-[130px]  h-[30px] mt-2 flex justify-between items-center  bg-gray-800'>
                    <a className='flex text-sm justify-between  items-center w-full text-gray-300 '
                    href="https://github.com/RamanSingh2611">
                    GitHub <FaGithub size={20}/>
                    </a>
                </li>
                <li className=' w-[130px]  h-[30px] mt-2 flex justify-between items-center  bg-red-400'>
                    <a className='flex text-sm justify-between  items-center w-full text-gray-300' 
                    href="/">
                    EMail <HiOutlineMail size={20}/>
                    </a>
                </li>
                
                <li className=' w-[130px]  h-[30px] mt-2 flex justify-between items-center bg-violet-500'>
                    <a className='flex text-sm justify-between items-center w-full text-gray-300' 
                    href={Resume} download='My Resume'>
                    Resume <BsFillPersonLinesFill size={20}/>
                    </a>
                </li>
            
        </ul>

        {/* Social Icons for mobile view */}


        {/* Social Icons */}

        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/raman-singh-315675231/">
                    LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-gray-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/RamanSingh2611">
                    GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-400'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href= "mailto: ramanimp2003@gmail.com">
                    EMail <HiOutlineMail size={30}/>
                    </a>
                </li>
                
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-violet-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href={Resume} download='My Resume'>
                    Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        

    </div>
  )
}

export default Navbar