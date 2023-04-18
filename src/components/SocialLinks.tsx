import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    return (
        <div className='hidden lg:flex flex-col'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-900'>
                    <a href="https://www.linkedin.com/in/georgiana-iordache-487261162/" className='flex justify-between items-center w-full text-white'>
                        <>
                            Linkedin <FaLinkedin size={30}/>
                        </>
                    </a>
                </li>

                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-900'>
                    <a href="https://github.com/georgianaiordache1012" className='flex justify-between items-center w-full text-white'>
                        <>
                            Github <FaGithub size={30}/>
                        </>
                    </a>
                </li>

                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-900'>
                    <a href="mailto:georgiana.iordache1012@gmail.com" className='flex justify-between items-center w-full text-white'>
                        <>
                            Mail <HiOutlineMail size={30}/>
                        </>
                    </a>
                </li>

                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-900'>
                    <a href="https://docs.google.com/document/d/1uQLLGBQ4QH81EA4C_4XURE9zDIgDKtKvvDm5IpuJXG0/edit?usp=sharing" className='flex justify-between items-center w-full text-white'>
                        <>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks