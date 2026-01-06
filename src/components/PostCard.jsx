import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/PostCard.css'

const sliceText = (text , limit = 60)=>{
    if(text.length <= limit){
        return text;
    }
    return text.slice(0, limit) + '...';
}


const PostCard = ({ post}) => {
    const imgSrc = `https://picsum.photos/200?random=${post.id}`;

  return (
    <div className='post-card'>
        <img src={imgSrc} alt="" className='post-card-img'/>
        <div className="post-card-content">
            <p className="post-card-user">User ID: {post.userId}</p>
            <p className="post-card-title">
                Title: {sliceText(post.title, 25)}
            </p>
            <p className="post-card-body">
                Body: {sliceText(post.body, 80)}
            </p>
            <Link to={`/item/${post.id}`} className='post-card-readmore'>
                Read More...
            </Link>
        </div>

      
    </div>
  );
};

export default PostCard
