import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: "Levy Media",
      description: "Where my brother and I write about what comes to mind. Mainly business and tech.",
      link: "https://levy.media/"
    },
    {
      title: "My Journey",
      description: "Where I document my entrepreneurial journey.",
      link: "https://google.com"
    }
  ];

  return (
    <div className="blog-grid">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-title-link">
            <h3>{post.title}</h3>
          </a>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
