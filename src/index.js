import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BlogPost from './BlogPost';
import * as serviceWorker from './serviceWorker';
import blogs from './blog-post.json'

const blogPosts = blogs.map((blog, id) => {
  return <BlogPost title={blog.title} body={blog.body} key={id}/>
})

ReactDOM.render(  
  <React.StrictMode>
    {blogPosts}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
