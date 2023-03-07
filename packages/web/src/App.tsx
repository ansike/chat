import React from 'react'
import './App.css'
import SelfRouter from './router'

function App () {
  // fetch('/')
  //   .then(async res => {
  //     console.log(await res.text())
  //   })
  //   .catch(e => {
  //     console.log(e)
  //   })
  return (
    <div className='App'>
      <SelfRouter />
    </div>
  )
}

export default App
