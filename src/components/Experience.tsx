import React from "react";
import ImageSlider from "./ImageSlider";

export function Experience(): JSX.Element {

    return (
        <div id='experience' className='bg-slate-900 hs-screen w-full flex flex-col justify-between'>
                <div className='flex flex-col h-[33vh] justify-center text-white font-bold px-4'>
                    <p className='text-4xl md:text-5xl font-bold border-b-4 border-white-500 p-2 inline'>My
                        Experience</p>
                    <p className='py-6'>I have relevant experience with the following technologies:</p>
                </div>
                <div className='w-full h-[30vh]'>
                    <ImageSlider />
                </div>
        </div>
    )
};