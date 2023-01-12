import { useState } from 'react'

import './App.css'
import { AddQuestion } from './components/AddQuestion'

function App() {


  return (
    <div className="App">
      <div className="qa-container">
        <AddQuestion/>
      </div>
    </div>
  )
}

export default App
