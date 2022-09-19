import React, { useState } from 'react';
import Posts from './Posts'
import './style.css';
import { useDispatch } from 'react-redux';
import { addPost } from "./store/mainReducer";
import { v4 as uuid } from "uuid"
export default function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const newPost = (e) => {
    e.preventDefault();
    dispatch(addPost({id: uuid() , text: text}))
    setText("")
  };

  return (
    <div>
      <form onSubmit={newPost}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <h1>{text}</h1>
      <Posts />
    </div>
  );
}
