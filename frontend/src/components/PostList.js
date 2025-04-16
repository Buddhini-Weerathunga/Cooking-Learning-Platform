
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:8080/api/posts');
    setPosts(res.data);
  };

  const likePost = async (id) => {
    await axios.put(`http://localhost:8080/api/posts/${id}/like`);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid gray', margin: '10px' }}>
          <p>{post.content}</p>
          {post.mediaType === 'image' ? (
            <img src={post.mediaUrl} alt="" width="200" />1
          ) : (
            <video src={post.mediaUrl} controls width="200" />
          )}
          <p><strong>Tutorial:</strong> {post.tutorialSteps}</p>
          <button onClick={() => likePost(post.id)}>Like ({post.likes})</button>
        </div>
      ))}
    </div>
  );
}
export default PostList;
