import React, { useState } from 'react'
import './AddQuestion.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActive } from '../RTK/slices/addQuestionSlice'
import { uid } from 'uid'
import { setQuestion } from '../RTK/slices/questionsStateSlice'

export const AddQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState('')
   const dispatch = useDispatch()
   const active = useSelector(state => state)


    const hideModal = () =>{
        dispatch(setActive(false))
       dispatch(setQuestion({question: currentQuestion, id: uid()}))
       console.log(active)
    }


    const inputHandler = event => {
        setCurrentQuestion(event.target.value)
        console.log(currentQuestion)
    }

  return (
    <div  className='add-overlay'>
        <div className="add-modal">
            <h1>Ask a question?</h1>
            <input onChange={inputHandler} placeholder='Your question' type="text" />
            <button onClick={hideModal} className='add-ask-btn'>Ask</button>
        </div>
    </div>
  )
}
