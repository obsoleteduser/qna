import { configureStore } from "@reduxjs/toolkit";
import { addQuestionBox } from "../slices/addQuestionSlice";



export const store = configureStore({
    reducer: {
        addQuestionBox: addQuestionBox
    }
})