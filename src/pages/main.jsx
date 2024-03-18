import React, { useEffect, useState } from 'react';
import Banner2 from '../images/student/student2.png';
import Coma from '../images/coma.png';
import { Reveal, AttentionSeeker } from 'react-awesome-reveal';
import Faq from '../components/Faq';

function Main() {
  const reviews = [
    { writer: "Rahul Gupta", review: "Sending my child to XYZ School was the best decision I made. The school's nurturing environment and dedicated teachers have greatly improved my child's academic performance and overall personality. I highly recommend XYZ School to every parent seeking quality education for their child." },
    { writer: "Priya Sharma", review: "I'm immensely satisfied with ABC School's holistic approach to education. Not only does my child excel academically, but they also emphasize character-building and extracurricular activities. The school's supportive staff and state-of-the-art facilities make it a top choice for any parent." },
    { writer: "Amit Singh", review: "As a parent, I couldn't be happier with the education my child is receiving at PQR School. The school's innovative teaching methods and focus on individualized learning have helped my child reach their full potential. I'm truly grateful for the positive impact PQR School has had on my child's academic journey." },
    { writer: "Neha Patel", review: "My experience with LMN School has been nothing short of exceptional. The school's commitment to academic excellence, coupled with its emphasis on moral values and discipline, sets it apart from others. I have seen a remarkable transformation in my child since they enrolled at LMN School." }
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
        <Reveal triggerOnce>
          <div className='mb-[16rem] md:w-[30rem] md:mb-0 md:h-[28rem] m-11  relative  bg-slate-200 rounded-2xl shadow-2xl p-8'>
            <h1 className='text-4xl md:text-7xl font-bold text-black text-center mb-8'>Fostering a love for learning.</h1>
            <p className='text-lg md:text-2xl font-mono text-center'>A young heart, a curious mind. Is there a better time to love to learn?</p>
          </div>
        </Reveal>
      </div>

      <Reveal triggerOnce>
        <div className='p-10 flex justify-center items-center flex-col md:p-24 md:flex-row'>
          <div className='flex flex-col h-[15rem] w-full md:w-[26rem] md:h-[26rem] mt-10 md:ml-20 '>
            <h1 className='font-extrabold text-3xl md:text-6xl'>learning is playing</h1>
            <p className='text-2xl mt-10'>In the world of education, the schoolyard is the laboratory where learning through play flourishes</p>
          </div>
          <img src={Banner2} alt="saa" className='w-full mt-0 irregular-polygon md:w-[60rem] h-auto  md:ml-10 rounded-lg  md:mt-10  shadow-2xl' />
        </div>
      </Reveal>

      <div className='flex justify-center items-center flex-col flex-wrap m-4 md:m-10'>
        <div className='flex justify-center items-center flex-wrap'>
          <h1 className='font-bold text-3xl m-7 md:text-7xl'>Your child's Journey</h1>
        </div>
        <div className='m-0 md:flex justify-around items-center  md:m-10 flex-wrap'>
          <Reveal triggerOnce>
            <div className=' w-[15rem] h-[15rem] octagon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  md:w-[20rem] m-4 md:m-10 mt-4 md:mt-20 md:h-[20rem] bg-amber-400 text-center shadow-2xl'>Nursery</div>
          </Reveal>
          <Reveal triggerOnce>
            <div className='w-[15rem] h-[15rem] octagon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105   md:w-[20rem] m-4 md:m-10 mt-4 md:mt-20 md:h-[20rem] bg-amber-400 text-center shadow-2xl'>LKG & UKG</div>
          </Reveal>
          <Reveal triggerOnce>
            <div className='w-[15rem] h-[15rem] octagon transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105   md:w-[20rem] m-4 md:m-10 mt-4 md:mt-20 md:h-[20rem] bg-amber-400 text-center shadow-2xl'>1st to 3rd</div>
          </Reveal>
        </div>
      </div>
      <AttentionSeeker triggerOnce>
        <div className='flex justify-center items-center flex-col flex-wrap m-4 md:m-10'>
          <div className='flex justify-center items-center flex-wrap'>
            <h1 className='font-bold text-3xl md:text-6xl mb-10'>What people say about us ?</h1>
          </div>
          <div className='flex justify-around items-center m-4 md:m-20  flex-wrap'>
            <img src={Coma} alt="coma" className='w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] mb-8 md:mb-28 pl-10 rotate-180 rounded-full' />
            <div className='md:w-[40rem] h-auto md:h-[20rem] flex justify-center items-center text-center shadow-2xl'>
              <p className='text-lg md:text-2xl m-4'>
                <strong>{reviews[currentReview].writer}</strong>: {reviews[currentReview].review}
              </p>
            </div>
            <img src={Coma} alt="coma" className='w-[10rem] h-[10rem] mb-0 mt-8 md:w-[15rem] md:h-[15rem]  md:mb-28 pl-10 rounded-full' />
          </div>
        </div>
      </AttentionSeeker>
      <div className='w-full h-auto bg-slate-500'>
        <Faq />
      </div>
    </div>
  );
}

export default Main;
