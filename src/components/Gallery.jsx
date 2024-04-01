import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Banner2 from "../images/cutekid.png";
import {JackInTheBox } from 'react-awesome-reveal';
import as1 from "../images/asset1.png";

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [autoplay, setAutoplay] = useState(true);

  const sliderPhotos = [
    { src: require('../images/infrastructure/infra1-min.png'), alt: 'Image 1' },
    { src: require('../images/infrastructure/infra2-min.png'), alt: 'Image 2' },
    { src: require('../images/infrastructure/infra3-min.png'), alt: 'Image 3' },
    { src: require('../images/infrastructure/infra4-min.png'), alt: 'Image 4' },
    { src: require('../images/infrastructure/infra5-min.png'), alt: 'Image 5' },
    { src: require('../images/infrastructure/infra6-min.png'), alt: 'Image 6' },
    { src: require('../images/infrastructure/infra7-min.png'), alt: 'Image 7' },

  ];

  const gridPhotos = [
    { src: require('../images/student/student1.png'), alt: 'Student 1' },
    { src: require('../images/student/student2.png'), alt: 'Student 2' },
    { src: require('../images/student/student3.png'), alt: 'Student 3' },
    { src: require('../images/student/student4.png'), alt: 'Student 4' },
    { src: require('../images/student/student5.png'), alt: 'Student 5' },
    { src: require('../images/student/student6.png'), alt: 'Student 6' }
  ];

  // useEffect(() => {
  //   if (autoplay) {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((currentSlide + 1) % sliderPhotos.length);
  //     }, 3000); // Change slide every 3 seconds
  //     return () => clearInterval(interval);
  //   }
  // }, [autoplay, currentSlide, sliderPhotos.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % sliderPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + sliderPhotos.length) % sliderPhotos.length);
  };

  // const toggleAutoplay = () => {
  //   setAutoplay(!autoplay);
  // };

  return (
    <section className="py-12">
      <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
            <h1 className='flex justify-center items-center'><h1 className='text-10xl mb-7'>E</h1>XPLORE OUR WORLD</h1>
            <img src={as1} alt="as1" />
          </div>
      <div className="container mx-auto px-4">
  
        {/* Image Slider */}
        <div className="relative w-full mb-8">
          <Transition
            show={true}
            enter="transition-transform duration-300 ease-out"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="transition-transform duration-300 ease-out"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <img
              key={currentSlide}
              src={sliderPhotos[currentSlide].src}
              alt={sliderPhotos[currentSlide].alt}
              className="w-full h-[15rem] rounded-lg transform transition-transform duration-300 md:h-[35rem]"
            />
          </Transition>
          <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2">
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
              onClick={prevSlide}
            >
              {'<'}
            </button>
            <button
              className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
              onClick={nextSlide}
            >
              {'>'}
            </button>
          </div>


        </div>
        <JackInTheBox triggerOnce>
        <div className='flex justify-center items-center '>
        <div className=' flex flex-col justify-center py-5 items-center rounded-2xl p-3 md:flex-col bg-sky-200 mb-4 lg:flex-row md:w-[55rem] md:m-10'>
          <p className='font-bold text-2xl text-center md:text-4xl'>Every child is an artist. The problem is how to remain an artist once we grow up.</p>
          <img src={Banner2}  className='w-[13rem] h-[13rem] rounded-full m-3 md:w-[20rem] md:h-[20rem]' alt=''/>
        </div>
        </div>
        </JackInTheBox>

        {/* Grid of Photos */}
        <h1 className='text-3xl text-[#0B3F67] flex flex-col justify-center items-center font-bold md:font-bold md:text-5xl text-center mt-5'>Captured Moments<img src={as1} alt="asset" /></h1>
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2  gap-5 md:mt-15 md:gap-20 lg:grid-cols-2 ">
          {gridPhotos.map((photo, index) => (
            <div key={index} className="relative">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-300  hover:scale-125"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
