import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { useSelector} from 'react-redux'
import PostDetail from '../components/PostDetail'

const DetailsPage = () => {
   const { id } = useParams();
  const { items, loading, error } = useSelector((state) => state.posts);

  const post = items.find((p) => p.id === Number(id));

  if (loading) return <div className="center-text">Loading...</div>;
  if (error) return <div className="center-text error">Error: {error}</div>;

  if (!post) {
    return (
      <div className="center-text">
        <p>Post not found.</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return <PostDetail post={post} />;
}

export default DetailsPage
