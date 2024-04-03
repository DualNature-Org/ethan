import React from 'react';
import { Transition } from '@headlessui/react';
import { ReactTyped } from "react-typed";
import Reveal from 'react-awesome-reveal';

const Quote = ({ children }) => (
  <div className="text-center bg-blue-200 px-2 py-2 my-12">
    <blockquote className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl  font-normal text-gray-800">
      <ReactTyped
        strings={children.map(({ quote, author }) => `${quote} - <b>${author}</b>`)}
        typeSpeed={40}
        backSpeed={15}
        loop
        contentType='html'
      />
    </blockquote>
  </div>
);

const FacultySection = () => {
  // Example faculty data
  const facultyMembers = [
    { id: 1, name: "Natasha Ma'am", role: 'Math Teacher', about: 'She is an enthusiastic and lively teacher who constantly looks to evolve and improve upon her teaching methodology. Her learning is fused with fun, music, art, and play. Children not only learn faster, but remember it for life.', link: 'https://i.postimg.cc/Y9sjCdfH/Natasha-ma-am.jpg' },
    { id: 2, name: "Aavanj Ma'am", role: 'Science Teacher', about: 'She, very patiently, brings out the best in each child, imaginatively filling fun, hope, and self-belief in the lives of children who may sometimes be lost or unable to cope with the rest.', link: 'https://i.postimg.cc/yxjQRSxs/Aavanj-ma-am.jpg' },
    // Add more faculty members as needed
  ];
  const principal = {
    name: "Miss. Asha Raika",
    image: "https://i.postimg.cc/j57YyvYK/Asha-raika.jpg", 
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
                    src={principal.image}
                    alt="Principal"
                  />
                  <p className="text-xl lg:text-2xl" style={{ textAlign: 'justify', color: 'rgb(4 25 91)' }}>
                    "Welcome to Ethan School! Our mission is to provide a nurturing and inclusive environment where students can thrive academically, socially, and emotionally. As the Principal, it's my honor to lead our dedicated team of educators and staff in guiding our students toward success.
                    At Ethan School, we believe in the power of education to transform lives. We are committed to fostering a love of learning in our students and empowering them to become critical thinkers, problem solvers, and compassionate citizens of the world.
                  </p>
                  <p className="text-xl lg:text-2xl mt-4" style={{ textAlign: 'justify', color: 'rgb(4 25 91)' }}>
                    Our school values diversity, equity, and inclusion, and we strive to create a welcoming and supportive community for all. We celebrate the unique strengths and backgrounds of each individual and work together to create a positive and inclusive learning environment.
                    As we embark on this journey together, I invite parents, students, and staff to join us in our commitment to excellence. Together, we can inspire greatness, foster creativity, and unlock the potential within each and every student."
                    <span style={{color: 'gray', fontSize: '1.2rem'}}>- Asha Raika</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
      {/* Quote */}
      <Quote>
        {[
          {
            quote:
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
            author: "Malcolm X",
          },
          {
            quote: "The roots of education are bitter, but the fruit is sweet.",
            author: "Aristotle",
          },
          {
            quote:
              "Education is not the filling of a pail, but the lighting of a fire.",
            author: "William Butler Yeats",
          },
          {
            quote:
              "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela",
          },
          {
            quote:
              "The mind is not a vessel to be filled, but a fire to be kindled.",
            author: "Plutarch",
          },
          {
            quote:
              "Education is the key to unlocking the world, a passport to freedom.",
            author: "Oprah Winfrey",
          },
          {
            quote:
              "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            author: "Mahatma Gandhi",
          },
        ]}
      </Quote>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Our Faculty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Faculty Members */}
          {facultyMembers.map((faculty) => (
            <Reveal key={faculty.id} triggerOnce>
              <div key={faculty.id} className="bg-white rounded-lg shadow-md p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <img className="rounded-full w-32 h-32 lg:w-48 lg:h-48" src={faculty.link} alt={faculty.name} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-center">{faculty.name}</h3>
                <p className="text-xl lg:text-2xl text-gray-700">{faculty.about}</p>
                <p className="text-lg lg:text-xl text-gray-700 text-center mt-4">{faculty.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
