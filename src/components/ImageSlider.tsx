import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {CarouselData} from "./CarouselData";


const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? CarouselData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setCurrentSlide(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === CarouselData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setCurrentSlide(newIndex);
    };

    // const goToSlide = (slideIndex: number) => {
    //     setCurrentSlide(slideIndex);
    // };

    return (
        <div className='flex flex-col justify-between h-screen m-auto w-full'>
            <div className='flex justify-between px-32 group justify-evenly justify-between'>
                <div>
                    <BsChevronCompactLeft className='text-5xl rounded-full p-2 group-hover:bg-indigo-900 text-white cursor-pointer' onClick={prevSlide} size={50}/>
                </div>
                <div>
                    {CarouselData.map((slide, index) => {
                        return (
                            <div className='flex flex-col items-center'>
                                <img
                                    src={slide.src}
                                    alt="This is a carousel slide"
                                    key={index}
                                    className={
                                        index === currentSlide
                                            ? "object-center w-40 h-40"
                                            : "hidden"
                                    }
                                />
                                <p className={
                                    index === currentSlide
                                        ? "mt-4 text-white font-bold h-auto"
                                        : "hidden"
                                }>{slide.title}</p>
                            </div>

                        );
                    })}
                </div>
                <div>
                    <BsChevronCompactRight  className='text-2xl rounded-full p-2 group-hover:bg-indigo-900 text-white cursor-pointer' onClick={nextSlide} size={50}/>
                </div>
            </div>
            {/*<div className='flex justify-center py-2 h-[20vh]'>*/}
            {/*    {CarouselData.map((slide, slideIndex) => (*/}
            {/*        <div*/}
            {/*            className='text-2xl text-white cursor-pointer hover:text-indigo-900 hover:text-3xl'*/}
            {/*            key={slideIndex}*/}
            {/*            onClick={() => goToSlide(slideIndex)}*/}
            {/*        >*/}
            {/*            <RxDotFilled/>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>

    );
};

export default ImageSlider;