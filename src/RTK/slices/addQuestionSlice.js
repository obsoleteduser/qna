import { createSlice } from "@reduxjs/toolkit";


let initialState = {
    active: false
}


export const addQuestionBox = createSlice({
    name: 'add',
    initialState,
    reducers: {
        setActive: (state, action)=>{
            state.active = action.payload
        }
    }
})


export const { setActive } = addQuestionBox.actions
export default addQuestionBox.reducer