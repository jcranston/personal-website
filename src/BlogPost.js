import React from 'react';
import './BlogPost.css';

function BlogPost(props) {
  const paragraphs = props.body.map(paragraph => <p>{paragraph}</p>)

  return (
    <div className="blog-post">
      <h1>{props.title}</h1>
      {paragraphs}
    </div>
  );
}

export default BlogPost;