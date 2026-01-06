import React from 'react'
import '../styles/PostDetail.css'


const PostDetail = ({post}) => {
    const imgSrc = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className='detail-wrapper'>
        <h2 className="detail-heading">
            Details Page For Post With ID {post.id}
        </h2>

        <img src={imgSrc} alt="post"  className='detail-img'/>

        <div className="detail-text">
            <p>User ID: {post.userId}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
      
    </div>
  );
};

export default PostDetail
