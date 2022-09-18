import React, { useState, useId } from 'react';
import Posts from './Posts'
import './style.css';
import { useDispatch } from 'react-redux';
import { addPost } from "./store/mainReducer";
import { uuid } from "uuid"
export default function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const id = useId()

  const newPost = (e) => {
    e.preventDefault();
    dispatch(addPost({id: uuid() , text: text}))
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
