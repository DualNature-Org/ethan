import React from 'react';
import philosophy1 from '../images/student/student1.png';
import philosophy2 from '../images/student/student2.png';
import philosophy3 from '../images/student/student3.png';
import philosophy4 from '../images/student/student4.png';
import philosophy5 from '../images/student/student5.png';
import Reveal from 'react-awesome-reveal';
import as1 from "../images/asset1.png";

const dummyData = [
  {
    id: 1,
    image: philosophy1,
    title: "Screen Free Learning",
    description: "we promote screen free school, learning by staying close to nature, we promote cognitive development through interactions and physical activities. We foster creativity through imaginative play."
  },
  {
    id: 2,
    image: philosophy2,
    title: "Instilling Holistic Values",
    description: "We believe in fostering holistic development by instilling moral values, empathy, and resilience in our students. Our comprehensive approach ensures they grow into responsible individuals."
  },
  {
    id: 3,
    image: philosophy3,
    title: "Shaping Childhood",
    description: "Childhood is a precious time for exploration and growth. We create a nurturing environment that fosters curiosity, creativity, and a love for learning, shaping a bright future for every child."
  },
  {
    id: 4,
    image: philosophy4,
    title: "Embracing Diversity",
    description: "Diversity enriches our learning community. We celebrate differences and promote inclusivity, creating a supportive environment where every student feels valued and respected."
  },
  {
    id: 5,
    image: philosophy5,
    title: "Fostering Creativity",
    description: "Creativity is the key to innovation and success. We encourage students to think creatively, explore new ideas, and express themselves freely, nurturing their unique talents and abilities."
  }
];

function Philosophysection() {
  return (
    <>
    <div className=' flex justify-center items-center flex-col'>
    <div className='font-bold text-3xl flex flex-col text-[#0B3F67] justify-center items-center  md:text-6xl mb-10'>
            <h1 className='flex justify-center items-center'><h1 className='text-10xl mb-7'>O</h1>UR PHILOSOPHY</h1>
            <img src={as1} alt="as1" />
          </div>
    <div className="flex flex-wrap justify-center py-4 px-4 gap-16">
      {dummyData.map(item => (
        <Reveal key={item.id} triggerOnce>
        <div key={item.id} className="w-64 max-w-xs rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg hover:shadow-[#0B3F67] transition duration-300">
          <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-base">{item.description}</p>
          </div>
        </div>
        </Reveal>
      ))}
    </div>

    </div>
    </>
  );
}

export default Philosophysection;
