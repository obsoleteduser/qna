import { configureStore } from "@reduxjs/toolkit";
import  addQuestionBox  from "../slices/addQuestionSlice";
import  questionController from "../slices/questionsStateSlice";



export const store = configureStore({
    reducer: {
       questionBoxState: addQuestionBox,
       questions: questionController
    }
})