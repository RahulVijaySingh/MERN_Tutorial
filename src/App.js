import React from 'react'
import Navbar from './Navbar'
import TextForm from './TextForm'

const App = () => {
  return (
    <>

    <Navbar logo="TextUtilsss"/>
    <div className="container">

    <TextForm heading="Enter the text to analyze"/>

    </div>

    </>
   
  )
}

export default App