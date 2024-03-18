import React from 'react';
import { Transition } from '@headlessui/react';
import { ReactTyped } from "react-typed";
import Reveal from 'react-awesome-reveal';

const Quote = ({ children }) => (
  <div className="text-center my-12">
    <blockquote className="text-3xl lg:text-4xl font-bold text-gray-800"><ReactTyped strings={[
       "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.- Malcolm X",

       "The roots of education are bitter, but the fruit is sweet. - Aristotle",
       
       "Education is not the filling of a pail, but the lighting of a fire. - William Butler Yeats",
       
       "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
       
       "The mind is not a vessel to be filled, but a fire to be kindled.- Plutarch",
       
       "Education is the key to unlocking the world, a passport to freedom.- Oprah Winfrey",
       
       "Live as if you were to die tomorrow. Learn as if you were to live forever.- Mahatma Gandhi",
      ]}typeSpeed={40}
      backSpeed={15}
      loop /></blockquote>
  </div>
);

const FacultySection = () => {
  // Example faculty data
  const facultyMembers = [
    { id: 1, name: 'John Doe', role: 'Math Teacher' },
    { id: 2, name: 'Jane Smith', role: 'Science Teacher' },
    { id: 3, name: 'David Johnson', role: 'History Teacher' },
    { id: 4, name: 'Emily Brown', role: 'English Teacher' },
    { id: 5, name: 'Michael Wilson', role: 'Art Teacher' },
    { id: 6, name: 'Sarah Jones', role: 'Physical Education Teacher' },
    // Add more faculty members as needed
  ];
  const principal = {
    name: "Dr. Maya Patel",
    image: "/principal_image.jpg", // Replace with actual image URL
  };

  return (
    <section className="py-16">
      <Transition
        show={true}
        enter="transition-opacity duration-1000 ease-in-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000 ease-in-out"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
                  Principal's Note
                </h2>
                <div className="mb-8">
                  <img
                    className="rounded-full w-[20rem] h-[20rem] mx-auto mb-4"
                    src={`https://via.placeholder.com/150?text=${principal.name}`}
                    alt="Principal"
                  />
                  <p className="text-xl lg:text-2xl text-blue-800">
                    Welcome to Ethan School! Our mission is to provide a nurturing and inclusive environment where students can thrive academically, socially, and emotionally. As the Principal, it's my honor to lead our dedicated team of educators and staff in guiding our students toward success.
                  </p>
                  <p className="text-xl lg:text-2xl text-blue-800 mt-4">
                    At Ethan School, we believe in the power of education to transform lives. We are committed to fostering a love of learning in our students and empowering them to become critical thinkers, problem solvers, and compassionate citizens of the world.
                  </p>
                  <p className="text-xl lg:text-2xl text-blue-800 mt-4">
                    Our school values diversity, equity, and inclusion, and we strive to create a welcoming and supportive community for all. We celebrate the unique strengths and backgrounds of each individual and work together to create a positive and inclusive learning environment.
                  </p>
                  <p className="text-xl lg:text-2xl text-blue-800 mt-4">
                    As we embark on this journey together, I invite parents, students, and staff to join us in our commitment to excellence. Together, we can inspire greatness, foster creativity, and unlock the potential within each and every student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
      {/* Quote */}
      <Quote/>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Our Faculty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Faculty Members */}
          {facultyMembers.map((faculty) => (
            <Reveal key={faculty.id} triggerOnce>
            <div key={faculty.id} className="bg-white rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <img className="rounded-full mx-auto mb-4" src={`https://via.placeholder.com/150?text=${faculty.name}`} alt={faculty.name} />
              <h3 className="text-2xl lg:text-3xl font-semibold mb-2">{faculty.name}</h3>
              <p className="text-lg lg:text-xl text-gray-700">{faculty.role}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
