import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from './store/mainReducer';
const Posts = () => {
  const posts = useSelector((state) => state.main.posts);
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(removePost(id))
  };
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} style={}>
          <h1>{post.text}</h1>
          <button onClick={() => handleDelete(post.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
