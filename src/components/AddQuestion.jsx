import React from 'react'
import './AddQuestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActive } from '../RTK/slices/addQuestionSlice'

export const AddQuestion = () => {

   const dispatch = useDispatch()
   const active = useSelector(state => state.addQuestionBox)
    const hideModal = () =>{
        dispatch(setActive(false))
        console.log(active)
    }



  return (
    <div onClick={hideModal} className='add-overlay'>
        <div className="add-modal">
            <h1>Ask a question?</h1>
            <input placeholder='Your question' type="text" />
            <button className='add-ask-btn'>Ask</button>
        </div>
    </div>
  )
}
