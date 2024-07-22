// src/components/Community/CommunityPostList.jsx

import React from 'react';
import './CommunityPostList.css';

const CommunityPostList = ({ posts }) => {
  return (
    <div className="community-post-list">
      <h2>Community Posts</h2>
      {posts.length === 0 ? (
        <p>No community posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id} className="community-post-item">
              <h3>{post.title}</h3>
              <p className="community-post-meta">
                Posted by {post.user.name} on {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="community-post-content">{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommunityPostList;
