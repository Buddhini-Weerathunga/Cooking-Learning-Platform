import React, { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [content, setContent] = useState('');
  const [tutorialSteps, setTutorialSteps] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaType, setMediaType] = useState('image');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: 1, // placeholder
      content,
      tutorialSteps,
      mediaUrl,
      mediaType
    };
    await axios.post('http://localhost:8080/api/posts', newPost);
    alert('Post created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea placeholder="Write your experience..." value={content} onChange={(e) => setContent(e.target.value)} />
      <input placeholder="Tutorial steps (optional)" value={tutorialSteps} onChange={(e) => setTutorialSteps(e.target.value)} />
      <input placeholder="Media URL" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} />
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
      <button type="submit">Post</button>
    </form>
  );
}
export default PostForm;
