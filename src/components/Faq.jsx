import React from 'react'
import { JackInTheBox } from 'react-awesome-reveal'
// import as1 from "../images/asset1.png";

function Faq() {
    const faqs = [
        {
            question: "What are the school timings?",
            answer: "The school timings are from 8:00 AM to 2:00 PM on weekdays."
            
        },
        {
            question: "Is transportation available for students?",
            answer: "Yes, we provide transportation services for students residing in designated areas. Please contact the school office for more information."
        },
        {
            question: "Does the school offer extracurricular activities?",
            answer: "Absolutely! We offer a wide range of extracurricular activities including sports, music, arts, drama, and more to ensure the holistic development of our students."
        },
        {
            question: "What is the admission process?",
            answer: "The admission process involves filling out an application form, submitting required documents, appearing for an entrance test (if applicable), and attending an interview. Please visit our website or contact the admissions office for detailed information."
        },
        {
            question: "Are scholarships available?",
            answer: "Yes, we offer scholarships to deserving students based on their academic performance, extracurricular achievements, and financial need. Scholarship criteria and application details can be found on our website or obtained from the school office."
        },
        {
            question: "How are parents involved in the school?",
            answer: "We encourage parental involvement through various means such as parent-teacher meetings, school events and volunteering opportunities. Parents are an integral part of our school community and their support is highly valued."
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