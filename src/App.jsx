import React from 'react'
import News from './News'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <News/>
    </BrowserRouter>
    </>
  )
}

export default App