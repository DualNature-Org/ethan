import React, { useEffect, useState } from 'react';
import i1 from '../images/illustrations/i1.gif';
import i2 from '../images/illustrations/i2.gif';
import i4 from '../images/illustrations/i4.gif';
import i5 from '../images/illustrations/i5.gif';
// import Banner2 from '../images/student/student2.g';
import infra1 from '../images/infrastructure/infra1-min.png';
import infra2 from '../images/infrastructure/infra2-min.png';
import infra3 from '../images/infrastructure/infra3-min.png';
import infra4 from '../images/infrastructure/infra4-min.png';
// import i1 from '../images/i1.png';

import Student1 from '../images/student/student1.png';
import Student2 from '../images/student/student5.png';
import Student3 from '../images/student/student3.png';
import Student4 from '../images/student/student4.png';
import Student5 from '../images/student/student2.png';
import Student6 from '../images/student/student6.png';

import Video from "../components/video";
import { Reveal, AttentionSeeker, JackInTheBox } from 'react-awesome-reveal';
import as1 from "../images/asset1.png";
// import home1 from '../images/home1.png';
import Grid from '../components/Grid';


function Main() {
  const reviews = [
    { writer: "Rahul Gupta", review: "Sending my child to Ethan School was the best decision I made. The school's nurturing environment and dedicated teachers have greatly improved my child's academic performance and overall personality. I highly recommend Ethan School to every parent seeking quality education for their child." },
    { writer: "Priya Sharma", review: "I'm immensely satisfied with Ethan School's holistic approach to education. Not only does my child excel academically, but they also emphasize character-building and extracurricular activities. The school's supportive staff and state-of-the-art facilities make it a top choice for any parent." },
    { writer: "Amit Singh", review: "As a parent, I couldn't be happier with the education my child is receiving at Ethan School. The school's innovative teaching methods and focus on individualized learning have helped my child reach their full potential. I'm truly grateful for the positive impact Ethan School has had on my child's academic journey." },
    { writer: "Neha Patel", review: "My experience with Ethan School has been nothing short of exceptional. The school's commitment to academic excellence, coupled with its emphasis on moral values and discipline, sets it apart from others. I have seen a remarkable transformation in my child since they enrolled at Ethan School." }
  ];

  const sliderPhotos = [
    Student1,
    Student2,
    // Student3,
    Student4,
    Student5,
    Student6
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay] = useState(true);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((currentReview + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentReview]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % sliderPhotos.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [autoplay, currentSlide, sliderPhotos.length]);
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
      <Reveal triggerOnce>
        <div className='p-10 flex justify-center items-center flex-col md:p-32 md: md:flex-row md:justify-center md:items-center'>
          <div className='flex flex-col h-[15rem] w-full md:w-[26rem] md:h-[26rem] mt-10  '>

            <h1 className='font-extrabold text-3xl md:text-6xl flex justify-center items-center'><h1 className='text-10xl pb-4'>L</h1>earning is playing</h1>
            <p className='text-2xl mt-10'>In the world of education, the schoolyard is the laboratory where learning through play flourishes</p>
          </div>
          <img src={sliderPhotos[currentSlide]} alt="saa" className='w-full mt-0  md:w-[53rem] h-auto  md: rounded-lg    shadow-2xl' />
        </div>
      </Reveal>
      <div className="w-full h-[25rem] mb-2 overflow-hidden relative   md:hidden">
        <div className="absolute inset-0 flex items-center animate-moveRightToLeft">
          <img
            src={i1}
            alt='move'
            className="h-[25rem] w-[25rem] object-cover"
          />
        </div>
      </div>
      <div className=' pb-14'>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='flex justify-center '>
            <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
              <h1 className='flex justify-center items-center mt-6'><h1 className='text-10xl mb-10 '>O</h1><p className='flex flex-col justify-center items-center'>
                ur purpose
                <img src={as1} alt="as1" />
              </p>
              </h1>
            </div>
            <img src={i2} alt="i2" className='w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[16rem] lg:h-[16rem] rounded-full' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-3xl font-bold m-5'>Vision</h1>
            <p className='text-xl text-center shadow-md shadow-[#0B3F67] py-4 px-4 md:text-2xl md:py-8 md:px-8'>A child's human rights are non-negotiable for us.
              We prioritise a child's human rights as part of our ‘What's Right for the Child’ (WRFC) ethos. Our fundamental belief and ideology is shaped by the right to trust, the right to be respected, and the right to live in an abuse-free world.
            </p>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-3xl font-bold m-5'>Mission</h1>
            <p className='text-xl text-center py-4 shadow-md shadow-[#0B3F67] px-4 md:text-2xl'>We are committed to instilling skills, knowledge, and values in our children in order to give them an inner voice for the twenty-first century.
              Our learning environment allows each child to nurture the learning minds namely the Focused Mind, Analytical Mind, Inventive Mind, Empathetic Mind, and Conscientious Mind.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center bg-blue-200 p-2 pt-2 pb-2  md:p-10 md:pt-16  md:pb-16 mr-2 ml-2'>
        <JackInTheBox triggerOnce>
          <Grid />
        </JackInTheBox>
      </div>
      <div className='flex justify-center items-center mt-4 mb-4'>
        <img src={i5} alt="asdas" />
      </div>
      <div className='mb-[7rem]   bg-yellow-100 px-4 py-4   mr-2 ml-2'>
        <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
          <h1 className='flex justify-center items-center backdrop-blur-lg'><h1 className='text-9xl mb-7'>I</h1>nfrastructure</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-center group'>
            <img src={infra1} alt=" 1" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
          <div className='flex flex-col justify-center items-center group'>
            <img src={infra2} alt=" 2" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-center group'>
            <img src={infra3} alt=" 3" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
          <div className='flex flex-col justify-center items-center group'>
            <img src={infra4} alt=" 4" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
        </div>
        <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
          <h1 className='flex justify-center items-center '><h1 className='text-9xl '>s</h1>tudents</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-center group'>
            <img src={Student1} alt="Student 1" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
          <div className='flex flex-col justify-center items-center group'>
            <img src={Student2} alt="Student 2" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <div className='flex flex-col justify-center items-center group'>
            <img src={Student3} alt="Student 3" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
          <div className='flex flex-col justify-center items-center group'>
            <img src={Student4} alt="Student 4" className='w-full h-full object-cover transition-all duration-300 transform scale-95 hover:scale-105' />
          </div>
        </div>
      </div>


      <div className='w-full p-3 bg-sky-200 '>
        <Video />
      </div>
      <AttentionSeeker triggerOnce>
        <div className='flex justify-center items-center flex-col  m-4 md:m-10 mt-16'>
          <div className='flex justify-center items-center flex-wrap'>
            <div className='flex justify-center'>
              <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center md:text-6xl'>
                <h1 className='flex justify-center items-center'>
                  <h1 className='text-10xl mb-7'>W</h1>
                  <p className='flex flex-col justify-center items-center'>hat people say about us?
                    <img src={as1} alt="as1" />
                  </p>
                </h1>
              </div>
              <img src={i4} alt="asa" className='hidden md:inline-block lg:inline-block w-[8rem] h-[8rem] md:w-[15rem] md:h-[15rem] lg:w-[18rem] lg:h-[18rem] rounded-full' />
            </div>
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