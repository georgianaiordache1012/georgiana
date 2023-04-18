import React from 'react';
import background from '../assets/background.jpg'
import {Link} from "react-scroll";
import SocialLinks from "./SocialLinks";

export function Hero(): JSX.Element {

    const home: String = "<Full Stack Developer />"

    return (
        <div className='w-full h-screen'>
            <img
                className='top-0 left-0 w-full h-screen object-cover'
                alt='bg'
                src={background}
            />
            <div className='bg-black/20 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] font-bold m-auto absolute p-4'>

                    <p className='text-2xl'> Georgiana Iordache </p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                        {home}
                    </h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                        I created this website in order to provide you with a better understanding of my skills and experience
                        while also enjoying a nice visual representation.
                        Please feel free to navigate around and learn more about me as a professional developer.
                    </p>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 italic'>
                        Please feel free to navigate around and learn more about me as a professional developer.
                    </p>
                    <button className='bg-indigo-900 text-white font-bold border-indigo-900'>
                        <Link activeClass="active" smooth spy to="contact"> Get in touch </Link>
                    </button>
                </div>
               <SocialLinks/>
            </div>
        </div>
    );
};
