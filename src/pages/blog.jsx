// src/pages/BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
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
    <div className="container mx-auto px-4 py-8">
      {/* Banner */}
      <div className="bg-[#0B3F67] text-white px-6 py-4 mb-6">
        <h1 className="text-3xl font-bold">Welcome to Our Blog</h1>
        <p className="text-lg mt-2">Discover the latest insights and stories from Ethan School.</p>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyBlogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
              <Link to={`/blog/${post.id}`} className="mt-2 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
