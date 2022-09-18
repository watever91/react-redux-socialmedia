import { configureStore } from '@reduxjs/toolkit';
import MainReducer from './mainReducer';
export const store = configureStore({
  reducer: {
    main: MainReducer,
  },
});
