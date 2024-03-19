// src/App.js
import './App.css';
import Navbar from './components/navbar';
import Main from './pages/main';
import Footer from './components/footer';
import Addmission from "./pages/Addmission";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from './pages/Aboutus';
import BlogPage from './pages/blog'; // Import BlogPage component
import BlogPostPage from './pages/blogpagepost'; // Import BlogPostPage component
import GallerySection from './components/Gallery';
import FacultySection from './components/Facultysection';

function App() {
  // Dummy blog post data
  const dummyBlogPosts = [
    {
      id: 1,
      title: "The Power of Project-Based Learning",
      content: "Project-based learning (PBL) is a teaching method in which students gain knowledge and skills by working for an extended period of time to investigate and respond to an authentic, engaging, and complex question, problem, or challenge.",
      imageUrl: "https://via.placeholder.com/800x500"
    },
    {
      id: 2,
      title: "Cultivating a Growth Mindset in Students",
      content: "A growth mindset is the belief that intelligence, abilities, and talents can be developed through dedication and hard work. Cultivating a growth mindset in students encourages them to embrace challenges, persevere in the face of setbacks, and view failure as an opportunity for growth.",
      imageUrl: "https://via.placeholder.com/800x500"
    },
    {
      id: 3,
      title: "Fostering Creativity in the Classroom",
      content: "Creativity is a valuable skill that can be cultivated and nurtured in the classroom. By providing opportunities for exploration, experimentation, and expression, educators can foster creativity in students and empower them to think critically, solve problems, and innovate.",
      imageUrl: "https://via.placeholder.com/800x500"
    }
  ];

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/admission' element={<Addmission/>}/>
          <Route path='/gallery' element={<GallerySection/>}/>
          <Route path='/faculty' element={<FacultySection/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/blog' element={<BlogPage blogPosts={dummyBlogPosts} />}/> {/* Pass blogPosts prop to BlogPage */}
          <Route path='/blog/:postId' element={<BlogPostPage blogPosts={dummyBlogPosts} />}/> {/* Pass blogPosts prop to BlogPostPage */}
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
