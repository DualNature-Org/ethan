// src/pages/BlogPostPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = ({ blogPosts }) => {
  const { postId } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(postId));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="w-full h-[20rem] mt-4 mb-6 md:h-[40rem]" />
      <p className="text-gray-700 text-lg font-medium">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
