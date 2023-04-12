import React from "react";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import {useParallax} from "react-scroll-parallax";

export function Projects(): JSX.Element{

    const parallaxX = useParallax<HTMLImageElement>({
        translateX: [0, 50],
    });

    const parallaxY = useParallax<HTMLImageElement>({
        translateX: [50, 0],
    });

    return (
        <div className='bg-slate-900 flex flex-row justify-between pt-8'>
            <div className=' flex flex-col justify-between h-1/3 w-1/2 px-4'>
                <h3 className='text-3xl md:text-5xl font-bold text-white'>OffWorks</h3>
                <p className='text-1xl py-6 text-white italic border-b-2 p-1 inline border-indigo-900 font-bold py-4'>
                    Design of a new application destined for enabling all the company employees to book a leave
                </p>
                <p className='text-white font-bold py-6'>
                    This has been the most complex project I ever worked on.
                    I had responsibilities on both front-end and back-end sides of the application.
                    I learned a lot about working within an agile environment and I also grew my technical skills.
                </p>
                <p className='pb-6 text-white font-bold'>
                    Tech Stack included the following technologies:
                </p>
                <img ref={parallaxY.ref} alt='pic1' className='w-1/2 h-60' src={pic1}></img>
            </div>
            <div className='bg-slate-900 flex flex-col justify-between h-1/3 w-1/2 px-4'>
                <h3 className='text-3xl md:text-5xl font-bold text-white'>SitTaker</h3>
                <p className='text-1xl py-6 text-white italic border-b-2 p-1 inline border-indigo-900 font-bold py-4'>
                    Was charged with implementing a new project that would serve as a
                    learning basis for new junior developers joining the company.
                </p>
                <p className='text-white font-bold py-6'>
                    I implemented the whole application by myself.
                    The scope of the application was to book a reservation for a restaurant.
                    It also had a user authentication feature build with AWS.
                </p>
                <p className='pb-6 text-white font-bold'>
                    Tech Stack included the following technologies:
                </p>
                <img ref={parallaxX.ref} alt='pic2' className='w-1/2 h-60' src={pic2}></img>
            </div>
        </div>
    );
}