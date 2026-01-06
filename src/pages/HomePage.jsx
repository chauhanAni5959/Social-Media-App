import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import PostList from '../components/PostList';
import '../styles/HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchPosts());
    }
  }, [dispatch, items.length]);

  if (loading) {
    return <div className="center-text">Loading posts...</div>;
  }

  if (error) {
    return <div className="center-text error">Error: {error}</div>;
  }

  return (
    <div className="home-page">
      <PostList posts={items} />
    </div>
  );
};

export default HomePage;
