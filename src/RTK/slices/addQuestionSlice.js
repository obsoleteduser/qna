import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    active: true
}


export const addQuestionBox = createSlice({
    name: 'addQuestionBox',
    initialState,
    reducers: {
        setActive: (state, action)=>{
            state.active = action.payload
        }
    }
})


export const { setActive } = addQuestionBox.actions
export default addQuestionBox.reducer