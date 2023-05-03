import avatar from '../assets/avatar.jpeg'
import React, {useState} from "react";
import {useParallax} from "react-scroll-parallax";
import {Projects} from "./Projects";

export function About(): JSX.Element {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    const {ref} = useParallax<HTMLDivElement>({speed: 10});

    return (<div>
            <div id='about' className='bg-slate-900 flex flex-row justify-between w-full hs-screen m-auto px-4 grid lg:grid-cols-2 gap-4'>
                <div ref={ref} className='h-[80vh]'>
                    <img className=' object-cover w-full h-full p-2' alt='avatar' src={avatar}></img>
                </div>
                <div className='flex flex-col h-[80vh] justify-center text-white font-bold'>
                    <h3 className='text-4xl md:text-5xl font-bold border-b-4 border-white-500 p-2 inline'>About Me</h3>
                    <p className='text-2xl italic py-6'>
                        I am a Full Stack Developer with professional experience
                    </p>
                    <p className='pb-6 text-white font-bold'>
                        I began working as a Software Developer for Thoughtworks Romania in 2021. Since then I grew a
                        lot in my role and became highly accomplished in many fields that relate to the domain we work
                        in. I have worked on two projects during my time with Thoughtworks and I gained invaluable experience.
                    </p>
                    <div className='bg-slate-900 flex flex-row justify-between'>
                        <div>
                            <button onClick={handleClick}
                                    className='bg-indigo-900 text-white font-bold border-indigo-900'>Learn more
                            </button>
                        </div>
                    </div>
                    {/*<div className='animate-spin-pic w-54 h-32 px-32 text-6xl' >⭐</div>*/}
                </div>
            </div>
            {
                nav && <Projects/>
            }
        </div>
    )
}