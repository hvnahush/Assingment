// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; // Import your task reducer

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Add your reducers here
  },
});

export default store; // Default export
