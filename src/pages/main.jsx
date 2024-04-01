import React, { useEffect, useState } from 'react';
import Banner2 from '../images/student/student2.png';
import infra1 from '../images/infrastructure/infra1-min.png';
import infra2 from '../images/infrastructure/infra2-min.png';
import infra3 from '../images/infrastructure/infra3-min.png';
import infra4 from '../images/infrastructure/infra4-min.png';

import Student1 from '../images/student/student1.png';
import Student2 from '../images/student/student2.png';
import Student3 from '../images/student/student3.png';
import Student4 from '../images/student/student4.png';
import Video from "../components/video";
import { Reveal, AttentionSeeker, JackInTheBox } from 'react-awesome-reveal';
import as1 from "../images/asset1.png";
import home1 from '../images/home1.png';


function Main() {
  const reviews = [
    { writer: "Rahul Gupta", review: "Sending my child to Ethan School was the best decision I made. The school's nurturing environment and dedicated teachers have greatly improved my child's academic performance and overall personality. I highly recommend Ethan School to every parent seeking quality education for their child." },
    { writer: "Priya Sharma", review: "I'm immensely satisfied with Ethan School's holistic approach to education. Not only does my child excel academically, but they also emphasize character-building and extracurricular activities. The school's supportive staff and state-of-the-art facilities make it a top choice for any parent." },
    { writer: "Amit Singh", review: "As a parent, I couldn't be happier with the education my child is receiving at Ethan School. The school's innovative teaching methods and focus on individualized learning have helped my child reach their full potential. I'm truly grateful for the positive impact Ethan School has had on my child's academic journey." },
    { writer: "Neha Patel", review: "My experience with Ethan School has been nothing short of exceptional. The school's commitment to academic excellence, coupled with its emphasis on moral values and discipline, sets it apart from others. I have seen a remarkable transformation in my child since they enrolled at Ethan School." }
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((currentReview + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentReview]);
  return (
    <div>
      <div className='w-screen h-[40rem] bg-banner bg-cover  flex justify-center  md:w-full overflow-hidden'>
        <JackInTheBox triggerOnce>
          <div className='mb-[16rem] md:w-[38rem] md:mb-0 md:h-[28rem] m-11  relative  bg-slate-200 rounded-2xl shadow-2xl p-8' style={{ opacity: '.8' }}>
            <h1 className='text-4xl md:text-7xl font-bold text-black text-center mb-8'>Fostering a love for learning.</h1>
            <p className='text-lg md:text-2xl font-mono text-center'>In the fertile soil of youth, curiosity blossoms into a vibrant tapestry of exploration. With gentle guidance and boundless encouragement, we can inspire young minds to embrace the joy of discovery.</p>
          </div>
        </JackInTheBox>
      </div>
      <hr style={{height: '1px', boxShadow: '#9090ee 0px 2px 10px 2px'}}/>

      <Reveal triggerOnce>
        <div className='p-5 flex justify-center items-center flex-col md:p-7rem md:ml-[6rem] md:flex-row md:justify-center md:items-center'>
          <div className='flex flex-col h-[15rem] w-full md:w-[26rem] md:h-[26rem] mt-10  '>
            <h1 className='font-extrabold text-3xl md:text-6xl' style={{padding: 0}}>Learning is playing</h1>
            <p className='text-2xl mt-10'>In the world of education, the schoolyard is the laboratory where learning through play flourishes.</p>
          </div>
          <img src={Banner2} alt="saa" className='w-full mt-0 irregular-polygon md:w-[60rem] h-auto  md:ml-10 rounded-lg    shadow-2xl' />
        </div>
      </Reveal>

      <div className='flex justify-center items-center bg-blue-200 p-2 pt-2 pb-2  md:p-10 md:pt-16  md:pb-16 mr-2 ml-2'>
        <JackInTheBox triggerOnce style={{padding: 0}}>
          <img src={home1} alt="home1" className=' w-[62rem] h-[18rem] md:w-[69rem] md:h-[19rem] lg:w-[75rem] lg:h-[29rem] ' />
        </JackInTheBox>
      </div>

      <div className='flex justify-center items-center flex-col flex-wrap m-4 md:m-10'>
        <div className='flex justify-center items-center flex-wrap'>
          <h1 className='font-bold flex flex-col text-[#0B3F67] justify-center items-center text-3xl m-7 md:text-6xl'>Your child's Journey <img src={as1} alt="as" /></h1>
        </div>
        <div className='m-0 md:flex justify-around items-center  md:m-7  mb-10 flex-wrap'>
          <Reveal triggerOnce>
            <div className=' w-[12rem] h-[12rem] hover:shadow-lg hover:shadow-[#0B3F67] transition duration-300 octagon duration ease-in-out transform hover:-translate-y-1 hover:scale-105  md:w-[14.5rem] m-4 md:m-7 mt-4 md:mt-20 md:h-[14.5rem] bg-amber-400 text-center shadow-2xl'>Nursery</div>
          </Reveal>
          <Reveal triggerOnce>
            <div className='w-[12rem] h-[12rem] hover:shadow-lg hover:shadow-[#0B3F67] transition duration-300 octagon duration ease-in-out transform hover:-translate-y-1 hover:scale-105   md:w-[14.5rem] m-4 md:m-5 mt-4 md:mt-20 md:h-[14.5rem] bg-amber-400 text-center shadow-2xl'>LKG & UKG</div>
          </Reveal>
          <Reveal triggerOnce>
            <div className='w-[12rem] h-[12rem] hover:shadow-lg hover:shadow-[#0B3F67] transition duration-300 octagon duration ease-in-out transform hover:-translate-y-1 hover:scale-105   md:w-[14.5rem] m-4 md:m-5 mt-4 md:mt-20 md:h-[14.5rem] bg-amber-400 text-center shadow-2xl'>1st </div>
          </Reveal>
          <Reveal triggerOnce>
            <div className='w-[12rem] h-[12rem] hover:shadow-lg hover:shadow-[#0B3F67] transition duration-300 octagon duration ease-in-out transform hover:-translate-y-1 hover:scale-105   md:w-[14.5rem] m-4 md:m-5 mt-4 md:mt-20 md:h-[14.5rem] bg-amber-400 text-center shadow-2xl'>2nd</div>
          </Reveal><Reveal triggerOnce>
            <div className='w-[12rem] h-[12rem] hover:shadow-lg hover:shadow-[#0B3F67] transition duration-300 octagon duration ease-in-out transform hover:-translate-y-1 hover:scale-105   md:w-[14.5rem] m-4 md:m-5 mt-4 md:mt-20 md:h-[14.5rem] bg-amber-400 text-center shadow-2xl'>3rd</div>
          </Reveal>
        </div>
      </div>
      <div className='mb-[7rem] mt-[7.5rem] bg-blue-100 p-4 mr-2 ml-2'>
      <div className='flex flex-col justify-center items-center'>
       <img src={infra} alt="infrastureuture" className='py-4 px-4 w-[60rem] h-[19rem] hover:scale-105 transition ease-out  md:w-[65rem] md:h-[27rem] lg:w-[70rem] lg:h-[30rem]' />
       <h1 className='text-xl m-2 font-semibold  '>Our Infrastructure</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
       <img src={Student} alt="Stu" className='py-4 px-4 w-[60rem] h-[19rem] hover:scale-105 transition ease-out  md:w-[65rem] md:h-[27rem] lg:w-[70rem] lg:h-[30rem]' />
       <h1 className='text-xl m-2 font-semibold  '>Students at Ethan</h1>
      </div>
      </div>
      <div className='m-2'>
        <div className='flex justify-center items-center flex-wrap'>
          <h1 className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>Our Vision and Mission<img src={as1} alt="as1" /></h1>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold m-2'>Vision</h1>
            <p className='text-xl text-center py-4 px-4 md:text-2xl md:py-8 md:px-8' style={{boxShadow: 'gray 0px 3px 7px 0px', textAlign: 'justify'}}>A child's human rights are non-negotiable for us.
              We prioritise a child's human rights as part of our ‘What's Right for the Child’ (WRFC) ethos. Our fundamental belief and ideology is shaped by the right to trust, the right to be respected, and the right to live in an abuse-free world.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold m-2 mt-8' >Mission</h1>
            <p className='text-xl text-center py-4 px-4 md:text-2xl md:py-8 md:px-8' style={{boxShadow: 'gray 0px 3px 7px 0px', textAlign: 'justify'}}>We are committed to instilling skills, knowledge, and values in our children in order to give them an inner voice for the twenty-first century.
              Our learning environment allows each child to nurture the learning minds namely the Focused Mind, Analytical Mind, Inventive Mind, Empathetic Mind, and Conscientious Mind.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center bg-blue-200 p-2 pt-2 pb-2  md:p-10 md:pt-16  md:pb-16 mr-2 ml-2'>
        <JackInTheBox triggerOnce>
          <img src={home1} alt="home1" className=' w-[62rem] h-[18rem] md:w-[69rem] md:h-[19rem] lg:w-[75rem] lg:h-[29rem] ' />
        </JackInTheBox>
      </div>
      <Reveal triggerOnce>
        <div className='mb-[7rem] mt-[7.5rem]  bg-yellow-100   mr-2 ml-2'>
          <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
            <h1 className='flex justify-center items-center'><h1 className='text-9xl mb-7'>I</h1>nfrastructure</h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center group'>
              <img src={infra1} alt=" 1" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
            <div className='flex flex-col justify-center items-center group'>
              <img src={infra2} alt=" 2" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center group'>
              <img src={infra3} alt=" 3" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
            <div className='flex flex-col justify-center items-center group'>
              <img src={infra4} alt=" 4" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
          </div>
          <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
            <h1 className='flex justify-center items-center'><h1 className='text-9xl '>s</h1>tudents</h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center group'>
              <img src={Student1} alt="Student 1" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
            <div className='flex flex-col justify-center items-center group'>
              <img src={Student2} alt="Student 2" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-center items-center group'>
              <img src={Student3} alt="Student 3" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
            <div className='flex flex-col justify-center items-center group'>
              <img src={Student4} alt="Student 4" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
            </div>
          </div>
        </div>
      </Reveal>


      <div className='w-full p-3 bg-sky-200 '>
        <Video />
      </div>
      <AttentionSeeker>
        <div className='flex justify-center items-center flex-col  m-4 md:m-10 mt-15'>
          <div className='flex justify-center items-center flex-wrap'>
            <h1 className='font-bold text-3xl flex flex-col mt-8 text-[#0B3F67] text-center items-center  md:text-6xl mb-6'>What people say about us ? <img src={as1} alt="as1" /></h1>
          </div>
          <div className='flex justify-around items-center m-4 md:m-20  flex-wrap'>
            <div className='md:w-[40rem] h-auto md:h-[20rem] flex  justify-center items-center text-center shadow-lg shadow-[#0B3F67]'>
              <p className='text-lg md:text-2xl m-4'>
                <strong>{reviews[currentReview].writer}</strong>: {reviews[currentReview].review}
              </p>
            </div>
          </div>
        </div>
      </AttentionSeeker>
    </div>
  );
}

export default Main