import React from 'react'
import philosophy1 from '../images/student/student3.png';
import philosophy2 from '../images/student/student7.png';
import philosophy3 from '../images/student/student3.png';
import philosophy4 from '../images/student/student4.png';

import as1 from "../images/asset1.png";

function Curriculam() {
  return (
    <div>
     <div className='w-screen h-[25rem] bg-banner2  bg-cover  flex justify-center  items-center md:w-full md:h-[33rem] overflow-hidden'>
     <div className='backdrop-blur-md  rounded-sm'>
          <h1 className=' bg-slate-400 text-4xl font-bold  bg-opacity-10 md:font-bold md:text-8xl text-center text-blue-500'>Our Curriculam</h1>
        </div>
      </div>
      <h1 className='font-bold flex flex-col text-[#0B3F67] justify-center items-center text-3xl m-7 md:text-6xl'> Ethan school focuses on <img src={as1} alt="as" /></h1>
    <div className='flex  justify-center items-center flex-col gap-[10rem] m-8'>
      <div className='flex flex-col justify-center items-center p-3 px-3 md:flex-row md:gap-[15rem]'>
        <img src={philosophy1} className='w-[13rem] h-[13rem] rounded-full  md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
        <div className='flex-flex-col justify-center items- w-[23rem] min-h-fit'>
        <h1 className='text-3xl font-bold m-3 text-center md:text-4xl lg:text-5xl'>Fine motor skills</h1>
        <p className='text-xl font-medium text-center'>Getting messy playing with colours or clay is the beginning of developing finger dexterity for independent ability for daily tasks. This includes writing, tying shoelaces, dressing by themselves and brushing teeth.</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center p-3 px-3 md:flex-row-reverse md:gap-[15rem]'>
        <img src={philosophy2} className='w-[13rem] h-[13rem] rounded-full  md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
        <div className='flex-flex-col justify-center items-center w-[23rem] min-h-fit'>
        <h1 className='text-3xl font-bold m-3 text-center md:text-4xl lg:text-5xl'>Social and emotional skills</h1>
        <p className='text-xl font-medium text-center'>Children acquire the capacity to understand, experience, express, and manage emotions, while simultaneously developing meaningful relationships with others. Each of our activities is planned to strengthen the child’s social and emotive abilities.</p>
        </div>
      </div>   
      <div className='flex flex-col justify-center items-center p-3 px-3 md:flex-row md:gap-[15rem]'>
        <img src={philosophy3} className='w-[13rem] h-[13rem] rounded-full  md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
        <div className='flex-flex-col justify-center items-center w-[23rem] min-h-fit'>
        <h1 className='text-3xl font-bold m-3 text-center md:text-4xl lg:text-5xl'>Speech and language</h1>
        <p className='text-xl font-medium text-center'>Whether it be the excited shrieks in the splash pool, or the insistent “Why”s at every moment of discovery, we encourage it all. What guides our innermost feelings and emotions, forms the basis of our communication with the external world. Talking and reading to your child, will refine these skills further.</p>
        </div>
      </div>  
       <div className='flex flex-col justify-center items-center p-3 px-3 md:flex-row-reverse md:gap-[15rem]'>
        <img src={philosophy4} className='w-[13rem] h-[13rem] rounded-full  md:w-[15rem] md:h-[15rem] lg:w-[25rem] lg:h-[25rem]' alt="curr" />
        <div className='flex-flex-col justify-center items-center w-[25rem] min-h-fit'>
        <h1 className='text-3xl font-bold m-3 text-center md:text-4xl lg:text-5xl'>cognitive skills</h1>
        <p className='text-xl font-medium text-center'>We build connections between what they think, read, learn and remember. We organize activities that ignite inquiry and promote logic and reasoning. Using a variety of every day responsibilities at school and at home, we add to their ever-expanding clarity of basic concepts.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Curriculam
