import { createSlice } from "@reduxjs/toolkit"



const initialState = []

export const questionController = createSlice({
    name: 'questionController',
    initialState,
   reducers: {
    setQuestion: (state, action)=>{
        state.push(action.payload)
    },
    setAnswer: (state, action)=>{
       const targetQuestion = state.filter(question => question.id === action.payload.id)[0]
       const index = state.indexOf(item => item.id === action.payload.id)
       targetQuestion.answer = action.payload.answer
       state[index] = targetQuestion
    }
   }
})


export const { setQuestion } = questionController.actions
export default questionController.reducer
