import React, {useState} from 'react';
import {HiMenuAlt3, HiOutlineMail} from 'react-icons/hi';
import {Link} from "react-scroll";
import "../style/Navbar.css"
import {FaGithub, FaLinkedin, FaTimes} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";

export function Navbar(): JSX.Element {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    };

    return (
        <div className='absolute w-full hs-screen flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-2xl z-20'> Passion for Technology </h1>
            <div className='flex flex-row justify-between'>
                <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25}/>
            </div>
            <div
                className={
                    nav ? 'ease-in duration-300 fixed text-gray-300 right-0 top-0 w-1/2 h-screen bg-black/90 px-4 py-7 flex-col z-40'
                        : 'absolute top-0 h-screen left-[-100%] ease-in-left duration-500 z-10'
                }
            >
                <FaTimes size={25} onClick={handleNav}></FaTimes>
                <nav>
                    <ul className=' md:flex flex flex-col fixed w-1/2 h-full items-center justify-center'>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-white'>
                            <Link activeClass="active" smooth spy to="about"> About </Link>
                        </li>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-white'>
                            <Link activeClass="active" smooth spy to="experience"> Experience </Link>
                        </li>
                        <li className='px-4 cursor-pointer capitalize py-6 text-4xl text-white'>
                            <Link activeClass="active" smooth spy to="contact"> Contact </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

