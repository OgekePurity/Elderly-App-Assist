// src/pages/Community.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommunityPostList from '../components/Community/CommunityPostList';
import AddCommunityPostForm from '../components/Community/AddCommunityPostForm';
import { fetchCommunityPosts, addCommunityPost } from '../features/Community/communitySlice';
import './Community.css';
import { Link } from 'react-router-dom';
import logoImg from '../img/logo.png';

function Community() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.community.posts);

  useEffect(() => {
    dispatch(fetchCommunityPosts());
  }, [dispatch]);

  const handleAddCommunityPost = async (newPost) => {
    await dispatch(addCommunityPost(newPost));
  };

  return (
    <div className="community">
      <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="links">
          <Link to="/home" className="mainlink">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/journal">JOURNAL</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/profile">PROFILE</Link>
        </div>
      </div>
      <h1>Community</h1>
      <AddCommunityPostForm onAdd={handleAddCommunityPost} />
      <CommunityPostList posts={posts} />
    </div>
  );
};

export default Community;
