import React, { useContext, useState } from 'react'
import Home from './components/Home'
import Hero from './components/Hero'


const App = () => {

  return (

      <div>
        <Home>
          <Hero />
        </Home>
      </div>
  )
}

export default App
