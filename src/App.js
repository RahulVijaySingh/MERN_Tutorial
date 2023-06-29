import React from 'react'
import Navbar from './Navbar'
import TextForm from './TextForm' 
import About from './About'

const App = () => {
  return (
    <>

      <Navbar logo="TextUtilsss" /> {/* logo here wiill work as props */}
      <div className="container my-2">

        <TextForm heading="Enter the text to analyze" />


        <About />


      </div>

    </>

  )
}

export default App