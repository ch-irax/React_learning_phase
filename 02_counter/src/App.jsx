import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [choco, setchoco] = useState(10)

  // let counter = 15
  const addValue = () => {
    if (choco <= 19) {
      setchoco(choco + 1)

    }

  }

  const reduceValue = () => {
    if (choco >= 1) {
      setchoco(choco - 1)
    }
  }

  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value: {choco}</h2>

      <button
        onClick={addValue}>Add On {choco}</button>
      <br />
      <button
        onClick={reduceValue}>Reduce on {choco}</button>

      <p>Value:-{choco}</p>
    </>
  )
}

export default App
