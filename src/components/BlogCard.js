import React from 'react';

function BlogCard({ title, subtitle, link }) {
  return (
    <div className="blog-card">
      <h3 className="blog-title">
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      </h3>
      <p className="blog-subtitle">{subtitle}</p>
    </div>
  );
}

export default BlogCard;
