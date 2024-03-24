import React,{useState} from 'react'
// import Banner from '../images/aboutbanner.png'
import FacultySection from '../components/Facultysection';
import Philosophysection from '../components/Philosophysection';
import GallerySection from '../components/Gallery';

function Aboutus() {
  const[faculty, setFaculty] = useState(true);
  const [philosophy, setPhilosophy] = useState(false);
  const[gallery, setGallery] = useState(false);
  return (
    <div>
      <div className='w-screen h-[33rem] bg-Abbanner bg-cover  flex justify-center  items-center md:w-full overflow-hidden'>
        <div className='backdrop-blur-sm  rounded-sm'>
          <h1 className=' bg-slate-300 text-3xl font-bold  bg-opacity-10 md:font-bold md:text-8xl text-center text-black'>Want to know about us?</h1>
        </div>
      </div>
      <div className='m-10'>
      <div className='flex justify-center items-center '>
      <h1 className='text-2xl font-semibold text-slate-600 m-3 cursor-pointer  md:m-5 lg:mr-7 hover:text-[#0B3F67] hover:underline'onClick={()=>{
          if(faculty){
            setFaculty(false);
            setPhilosophy(false);
            setGallery(true);
          }
          else{
            setPhilosophy(false);
            setGallery(false);
            setFaculty(true);
          }}}>Faculty</h1>
      <h1 className='text-2xl font-semibold text-slate-600 m-3 cursor-pointer  md:m-5 lg:mr-7 hover:text-[#0B3F67] hover:underline' onClick={()=>{
          if(philosophy){
            setPhilosophy(false);
            setGallery(false);
            setFaculty(true);
          }
          else{
            setFaculty(false);
            setGallery(false);
            setPhilosophy(true);
          }}}>Philosophy</h1>
        
        <h1 className='text-2xl font-semibold text-slate-600 m-3 cursor-pointer  md:m-5 lg:mr-7 hover:text-[#0B3F67] hover:underline' onClick={()=>{
          if(gallery){
            setGallery(false);
            setPhilosophy(false);
            setFaculty(true);
          }
          else{
            setFaculty(false);
            setPhilosophy(false);
            setGallery(true);
          }}}>Gallery</h1>
       
      </div>
      {
        // Faculty
        faculty?<FacultySection/>:<div></div>

      }
      {
        // Gallery
        gallery?<GallerySection/>:<div></div>
      }
      {
        // Philosophy
        philosophy?<Philosophysection/>:<div></div>
      }
      </div>

    </div>
  )
}

export default Aboutus
