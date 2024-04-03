import React from 'react'
import i6 from '../images/illustrations/i6.gif';
// import dodont from "../images/dodont.png";
import P2 from "../images/parent2.jpg";
// import as1 from "../images/asset1.png";
import ParentingTipsComponent from '../components/Doanddont';

function parents() {
  return (
    <>
      <div className='bg-yellow-100'>
        <div className='w-screen h-[22rem] bg-pbanner bg-cover bg-inherit flex justify-center  items-center md:w-full md:h-[30rem] overflow-hidden'>
          <div className='backdrop-blur-md  rounded-sm'>
            <h1 className=' bg-slate-300 text-3xl text-white font-bold bg-opacity-10 md:font-bold md:text-8xl text-center '>Parenting Tips for Student Success</h1>
          </div>
        </div>
        <div className=' mt-10 flex flex-col justify-center items-center'>
          <div className='font-bold text-3xl flex  mt-[1.5rem] text-[#0B3F67] justify-center items-center flex-wrap  md:text-6xl mb-10'>
            <h1 className='flex justify-center items-center'><h1 className='text-10xl mb-7'>D</h1>o's and dont's</h1>
            <img src={i6} alt="sad" className='w-[20rem] h-[15rem] px-3 py-3' />
          </div>
          <ParentingTipsComponent/>
        </div>
        <div className='flex flex-col mt-[2rem] justify-center items-center'>
          <img src={P2} alt="parent2" className='w-[17rem] h-[17rem] rounded-full md:w-[19rem] md:h-[19rem] lg:w-[23rem] lg:h-[23rem]' />
          <h1 className='text-xl text-center m-3 font-medium px-5 py-5 md:text-2xl lg:text-2xl'>Parenting small children is an enriching journey filled with moments of love, patience, and discovery. During these crucial early years, parents play a pivotal role in shaping their child's growth and development. It involves establishing consistent routines to provide stability and security, while also nurturing their natural curiosity through exploration and learning. Effective communication, marked by active listening and positive reinforcement, helps build strong parent-child relationships. Setting clear boundaries and practicing empathy and patience are essential for guiding children through challenges and teaching them valuable life skills. Prioritizing self-care ensures parents have the energy and resilience needed to support their children effectively. Celebrating milestones and achievements, no matter how small, fosters a sense of accomplishment and boosts a child's self-esteem. Ultimately, parenting small children is a deeply rewarding experience, characterized by moments of joy, growth, and unconditional love.</h1>
        </div>
      </div>
    </>
  )
}

export default parents
