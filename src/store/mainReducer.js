import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    removePost: (state, action) => {
      const filteredPosts = state.posts.filter(
        (post) => post.id !== action.payload
      );
      state.posts = filteredPosts;
    },
  },
});

export const { addPost, removePost } = mainSlice.actions;

export default mainSlice.reducer;
