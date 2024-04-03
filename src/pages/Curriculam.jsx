import React from 'react';
import philosophy1 from '../images/student/student3.png';
import philosophy2 from '../images/student/student7.png';
import philosophy3 from '../images/student/student3.png';
import philosophy4 from '../images/student/student4.png';
import as1 from "../images/asset1.png";
import i3 from '../images/illustrations/i3.gif';

function Curriculam() {
  return (
    <div>
      <div className='w-screen h-[25rem] bg-banner2 bg-cover flex justify-center items-center md:w-full md:h-[33rem] overflow-hidden'>
        <div className='backdrop-blur-md rounded-sm'>
          <h1 className='bg-slate-400 text-4xl font-bold bg-opacity-10 md:font-bold md:text-8xl text-center text-blue-500'>Our Curriculum</h1>
        </div>
      </div>
      <div className='flex justify-center'>
      <div className='font-bold text-3xl flex flex-col mt-12 text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
            <h1 className='flex justify-center items-center'><h1 className='text-10xl mb-7'>E</h1>than school focuses on</h1>
            <img src={as1} alt="as1" />
          </div>
          <img src={i3} alt="as" className='w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] lg:h-[18rem]' />
      </div>
      <div className='flex justify-center items-center flex-col gap-[3rem] m-8'>
        <div className='flex flex-col justify-center items-center  md:flex-row md:gap-[6rem]'>
          <img src={philosophy1} className='w-[13rem] h-[13rem] rounded-full md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
          <div className='flex flex-col justify-center items-center w-full md:w-[23rem]'>
            <h1 className='text-xl md:text-3xl font-bold m-3 text-center'>Fine motor skills</h1>
            <p className='text-lg md:text-xl font-medium text-center'>Getting messy playing with colors or clay is the beginning of developing finger dexterity for independent ability for daily tasks. This includes writing, tying shoelaces, dressing by themselves, and brushing teeth.</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row-reverse md:gap-[6rem]'>
          <img src={philosophy2} className='w-[13rem] h-[13rem] rounded-full md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
          <div className='flex flex-col justify-center items-center w-full md:w-[23rem]'>
            <h1 className='text-xl md:text-3xl font-bold m-3 text-center'>Social and emotional skills</h1>
            <p className='text-lg md:text-xl font-medium text-center'>Children acquire the capacity to understand, experience, express, and manage emotions, while simultaneously developing meaningful relationships with others. Each of our activities is planned to strengthen the child’s social and emotive abilities.</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row md:gap-[6rem]'>
          <img src={philosophy3} className='w-[13rem] h-[13rem] rounded-full md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
          <div className='flex flex-col justify-center items-center w-full md:w-[23rem]'>
            <h1 className='text-xl md:text-3xl font-bold m-3 text-center'>Speech and language</h1>
            <p className='text-lg md:text-xl font-medium text-center'>Whether it be the excited shrieks in the splash pool, or the insistent “Why”s at every moment of discovery, we encourage it all. What guides our innermost feelings and emotions, forms the basis of our communication with the external world. Talking and reading to your child will refine these skills further.</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center md:flex-row-reverse md:gap-[6rem]'>
          <img src={philosophy4} className='w-[13rem] h-[13rem] rounded-full md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
          <div className='flex flex-col justify-center items-center w-full md:w-[23rem]'>
            <h1 className='text-xl md:text-3xl font-bold m-3 text-center'>Cognitive skills</h1>
            <p className='text-lg md:text-xl font-medium text-center'>We build connections between what they think, read, learn, and remember. We organize activities that ignite inquiry and promote logic and reasoning. Using a variety of everyday responsibilities at school and at home, we add to their ever-expanding clarity of basic concepts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculam;
