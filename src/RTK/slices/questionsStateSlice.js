import { createSlice } from "@reduxjs/toolkit"



const initialState = []

export const questionController = createSlice({
    name: 'questionController',
    initialState,
   reducers: {
    setQuestion: (state, action)=>{
        state.push(action.payload)
    }
   }
})


export const { setQuestion } = questionController.actions
export default questionController.reducer
