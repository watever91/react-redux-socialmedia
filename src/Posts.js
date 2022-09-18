import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
const Posts = () => {
  const posts = useSelector((state) => state.main.posts);

  useEffect(()=> console.log(posts))

  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.text}</h1>
      ))}
    </div>
  );
};

export default Posts;
