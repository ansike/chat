import React from 'react'
import './App.css'
import Container from './components/Container'

function App () {
  fetch('/')
    .then(async res => {
      console.log(await res.text())
    })
    .catch(e => {
      console.log(e)
    })
  return (
    <div className='App'>
      <Container />
    </div>
  )
}

export default App
