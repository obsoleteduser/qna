import React from 'react'
import './AddQuestion.css'
import { useDispatch } from '@reduxjs/toolkit'

export const AddQuestion = () => {

   const dispatch = useDispatch()
    const hideModal = () =>{
        
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
