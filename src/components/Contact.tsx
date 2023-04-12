import React from 'react';
import pic5 from '../assets/pic5.png'
import pic4 from '../assets/pic4.png'
import {useParallax} from "react-scroll-parallax";

export function Contact(): JSX.Element {

    const parallaxX = useParallax<HTMLImageElement>({
        translateY: [-80, 80],
    });

    const parallaxY = useParallax<HTMLImageElement>({
        translateY: [80, -80],
    });

    return (
        <div id='contact' className='bg-slate-900 w-full hs-screen flex flex-col justify-between pt-16'>
                <div className='flex flex-col h-[30vh] justify-center text-white font-bold px-4'>
                    <p className='text-4xl md:text-5xl font-bold border-b-4 border-white-500 p-2 inline'>Contact</p>
                    <p className='py-6'>Complete the following form in order to get in touchwith me</p>
                </div>
                <div className='flex flex-row justify-center justify-between items-center  h-[60vh]'>
                    <div>
                        <img ref={parallaxX.ref} alt='notebook' className='w-40 h-40 pl-8' src={pic5}></img>
                    </div>
                    <form action="https://getform.io/f/adf4ddf5-f6a2-472d-ad3f-ab61db384f32"
                          method="POST"
                          className='flex flex-col w-full md:w-1/2'>
                        <input type="text"
                               name="name"
                               placeholder='Enter your name'
                               className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text"
                               name="email"
                               placeholder='Enter your email'
                               className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" placeholder ="Enter your message" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='bg-indigo-900 text-white font-bold border-indigo-900'>Get in touch</button>
                    </form>
                    <div>
                        <img ref={parallaxY.ref} alt='pen' className='w-40 h-40 pr-8' src={pic4}></img>
                    </div>
                </div>
        </div>
    )
};
