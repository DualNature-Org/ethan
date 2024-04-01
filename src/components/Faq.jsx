import React from 'react'
import { JackInTheBox } from 'react-awesome-reveal'
// import as1 from "../images/asset1.png";

function Faq() {
    const faqs = [
            {
              question: "When should I drop my child off for school?",
              answer: "You can drop your child off for school 10-30 minutes prior to the school timings. In summers, the timings are 8 AM to 2 PM with drop-off time at 7:30 AM."
            },
            {
              question: "What is the procedure for snacks and lunch?",
              answer: "We provide breakfast and lunch at school. You can refer to the menu for details."
            },
            {
              question: "Is there any school uniform?",
              answer: "No, there is no school uniform at the moment."
            },
            {
              question: "What happens if my child gets sick or hurt?",
              answer: "In that case, we inform you first-hand and provide necessary first aid if required."
            },
            {
              question: "What is the curriculum you use?",
              answer: "We use the Cambridge curriculum prescribed by Cambridge University, London, rewritten by Indian authors."
            },
            {
              question: "Does my child need to be potty trained?",
              answer: "Ideally, yes. However, if your child is not yet potty trained, we can assist in the process."
            },
            {
              question: "Do children nap?",
              answer: "Not all children nap, but arrangements are available if they feel sleepy."
            },
            {
              question: "How do I find out what’s going on in my child’s class or in the larger school community?",
              answer: "We update everything in the school WhatsApp group and on our website."
            },
            {
              question: "What about the playground? Will my child be playing with bigger kids?",
              answer: "Yes, it is necessary for socializing. We believe in genuine socialization and do not segregate children by age."
            },
            {
              question: "Where can I find out which teacher my child will have?",
              answer: "In the school WhatsApp group, we update all these details."
            },
            {
              question: "What do they do all day?",
              answer: "Their day is planned with various activities aimed at enhancing cognitive abilities, physical development, and emotional well-being."
            },
            {
              question: "Do you have CCTV cameras?",
              answer: "Yes, we have CCTV cameras, and parents have access to them to keep an eye on their children while they are in school."
            }
    ];

    return (
        <div>
            <div className="max-w-screen mx-auto px-5 bg-white min-h-sceen m-20">
                <div className="flex flex-col items-center">
                <h1 className='font-bold flex  text-[#0B3F67] justify-center items-center text-3xl m-7 md:text-5xl'><h1 className='text-10xl'>F</h1>AQ</h1>
                    <p className="text-neutral-500 text-xl mt-3">
                        Frequenty Asked Questions
                    </p>
                </div>
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 ">
                    {faqs.map((faq, index) => (

                        <JackInTheBox key={index} triggerOnce>
                            <details key={index} className="group ">
                                <summary className="flex justify-between items-center text-2xl transition duration-500 ease-in-out  p-5 font-medium cursor-pointer list-none">
                                    <span className='text-xl'>{faq.question}</span>
                                    <span className="transition group-open:rotate-180  duration-500 ease-in-out">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-neutral-600 mt-3 text-lg transition duration-500 ease-in-out ">
                                    {faq.answer}
                                </p>
                            </details>
                        </JackInTheBox>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq