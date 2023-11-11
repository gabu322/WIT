// components/Carousel.js

import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    style={{ objectPosition: 'center center' }}
                    className={`object-cover w-full h-full absolute ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        } transform ${index === currentIndex ? 'translate-x-0' : '-translate-x-full'
                        }`}
                />
            ))}
            <button className="absolute top-1/2 left-2 -translate-y-1/2" onClick={prevSlide}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(90deg)" }}>
                    <path d="M14 5L8 11L2 5" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="absolute top-1/2 right-4 -translate-y-1/2" onClick={nextSlide}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(-90deg)"}}>
                <path d="M14 5L8 11L2 5" stroke="black" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </button>
        </div>
    );
};

export default Carousel;
