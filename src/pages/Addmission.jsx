import React, { useState } from 'react';
// import Banner from "../images/Admissionbanner.png";
import Callback from "../images/Callback.png";
import Reveal, { AttentionSeeker, Flip } from 'react-awesome-reveal';

function Admission() {
  const [selectedClass, setSelectedClass] = useState('');

  const handleOptionChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const feeStructure = [
    { class: 'Nursery', tuitionFee: '5000', admissionFee: '2000', booksFee: '1500', uniformFee: '1000', total: '9500' },
    { class: 'LKG', tuitionFee: '5500', admissionFee: '2200', booksFee: '1600', uniformFee: '1100', total: '10400' },
    { class: 'UKG', tuitionFee: '6000', admissionFee: '2500', booksFee: '1700', uniformFee: '1200', total: '11400' },
    { class: '1st', tuitionFee: '6500', admissionFee: '2800', booksFee: '1800', uniformFee: '1300', total: '12400' },
    { class: '2nd', tuitionFee: '7000', admissionFee: '3000', booksFee: '1900', uniformFee: '1400', total: '13300' },
    { class: '3rd', tuitionFee: '7500', admissionFee: '3200', booksFee: '2000', uniformFee: '1500', total: '14200' }
  ];

  const getFeeData = () => {
    return feeStructure.find(fee => fee.class === selectedClass);
  };

  return (
    <div className='bg-white '>
      <div className='w-screen h-[33rem] bg-Adbanner bg-cover  flex justify-center items-center md:w-full'>
        <div className=' bg-slate-300  bg-opacity-85'>
          <h1 className='text-6xl md:font-bold md:text-8xl text-center text-blue-600'>Admissions Open</h1>
          <h1 className='text-6xl md:font-bold md:text-8xl text-center text-white'>2023-2024</h1>
        </div>

      </div>
      <div>
        <h1 className='font-bold text-5xl text-center mt-5'>Admission Enquiry</h1>
        <div className='p-10 '>
          <Reveal triggerOnce>
            <form className='flex  flex-col justify-center items-center bg- bg-slate-200 p-5 '>
              <label htmlFor="class" className='font-semibold text-lg mr-2 md:text-xl'>Choose the class you want to enroll in</label>
              <select id='class' value={selectedClass} onChange={handleOptionChange} className='mt-2 mb-3'>
                <option value="">Select your class</option>
                {feeStructure.map((fee, index) => (
                  <option key={index} value={fee.class}>{fee.class}</option>
                ))}
              </select>
            </form>
          </Reveal>
        </div>
      </div>
      {selectedClass && (
        <AttentionSeeker triggerOnce >
          <div className=''>
            <h1 className='font-bold text-3xl text-center'>Fee Structure for {selectedClass}</h1>
            <div className='m-4 mb-2'>
              <table className='w-full mb-6'>
                <thead className='bg-blue-500 text-white'>
                  <tr>
                    <th>Tuition Fee (INR)</th>
                    <th>Admission Fee (INR)</th>
                    <th>Books Fee (INR)</th>
                    <th>Uniform Fee (INR)</th>
                    <th>Total (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{getFeeData().tuitionFee}</td>
                    <td>{getFeeData().admissionFee}</td>
                    <td>{getFeeData().booksFee}</td>
                    <td>{getFeeData().uniformFee}</td>
                    <td>{getFeeData().total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </AttentionSeeker>
      )}
      <div className=' bg-blue-300 rounded-lg w-screen flex flex-col justify-center p-5 items-center md:flex-row justify-around md:w-full'>
        <div className='flex flex-col justify-center items-center'>
          <img src={Callback} className='w-[10rem] h-[10rem] rounded-full md:w-[20rem] md:h-[20rem]' alt=''/>
          <h1 className='font-bold text-lg text-center bg-white rounded-lg p-2 m-3 md:text-xl'>Request a callback from us. </h1>
        </div>
        <Flip triggerOnce>
          <form className=' flex flex-col justify-center items-center p-6 w-[20rem] h-[23rem] m-2 bg-blue-200 md:w-[25rem] md:h-[28rem] md:justify-between md:p-8'>
            <label htmlFor="name" className='font-semibold text-lg mr-2 md:text-xl'>Name</label>
            <input type="text" id="name" name="name" className=' m-3 w-[18rem] h-[2rem] p-2' placeholder='Enter your name' />
            <label htmlFor="phone" className='font-semibold text-lg mr-2 md:text-xl'>Phone</label>
            <input type="text" id="phone" name="phone" className='m-3 w-[18rem] h-[2rem] p-2' placeholder='Enter your phone' />
            <label htmlFor="email" className='font-semibold text-lg mr-2 md:text-xl'>Student Class</label>
            <input type="text" id="Class" name="Class" className='m-3 w-[18rem] h-[2rem] p-2' placeholder='Enter your class' />
            <button type="submit" className='bg-blue-500 text-white rounded-lg p-2 md:text-xl font font-semibold mt-7 hover:bg-blue-400'>Submit</button>
          </form>
        </Flip>
      </div>
    </div>
  );
}

export default Admission;
