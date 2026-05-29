import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let counter = 5
  const addValue = () => {
    console.log("Val add ");

  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add On</button>
      <br />
      <button>Reduce on</button>
    </>
  )
}

export default App
