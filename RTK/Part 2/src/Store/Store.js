import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Store/Posts/Slices/postsSlices";
export const store = configureStore({
    reducer: {
        posts: postReducer
    }
})
