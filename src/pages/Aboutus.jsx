import React,{useState} from 'react'
import Banner from '../images/aboutbanner.png'
import FacultySection from '../components/Facultysection';
import GallerySection from '../components/Gallery';

function Aboutus() {
  const[faculty, setFaculty] = useState(false);
  const[gallery, setGallery] = useState(true);
  return (
    <div>
      <div className='w-screen h-[33rem] bg-Abbanner bg-cover  flex justify-center  items-center md:w-full overflow-hidden'>
        <div className='backdrop-blur-sm  rounded-sm'>
          <h1 className=' bg-slate-300  bg-opacity-10 md:font-bold md:text-8xl text-center text-black'>Want to know about us?</h1>
        </div>
      </div>
      <div className='m-10'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-semibold text-slate-600 mr-7 cursor-pointer hover:text-blue-500 hover:underline' onClick={()=>{
          if(gallery){
            setGallery(false);
            setFaculty(true);
          }
          else{
            setFaculty(false);
            setGallery(true);
          }}}>Gallery</h1>
        <h1 className='text-3xl font-semibold text-slate-600 ml-7 cursor-pointer hover:text-blue-500 hover:underline'onClick={()=>{
          if(faculty){
            setFaculty(false);
            setGallery(true);
          }
          else{
            setGallery(false);
            setFaculty(true);
          }}}>Faculty</h1>
      </div>
      {
        // Faculty
        faculty?<FacultySection/>:<div></div>

      }
      {
        // Gallery
        gallery?<GallerySection/>:<div></div>
      }
      </div>

    </div>
  )
}

export default Aboutus
