import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // Fix 1: Changed 'let' to 'const'. In React, state arrays should always be declared 
  // with const because you never mutate the variable directly; you only use the setter.
  const [colour, setColour] = useState("olive")

  return (
    <>
      <div 
        className="app-container" 
        style={{ backgroundColor: colour, minHeight: "100vh", transition: "background-color 0.4s ease" }}>
        <div className="buttons">
          <div className="colour-buttons">
            <button className='btn red' onClick={() => setColour("red")}>Red</button>
            <button className='btn blue' onClick={() => setColour("blue")}>Blue</button>
            <button className='btn yellow' onClick={() => setColour("yellow")}>Yellow</button>
            <button className='btn olive' onClick={() => setColour("olive")}>Olive</button>
            <button className='btn white' onClick={() => setColour("white")}>White</button>
            <button className='btn lavender' onClick={() => setColour("lavender")}>Lavender</button>
            <button className='btn gray' onClick={() => setColour("gray")}>Gray</button>
            <button className='btn purple' onClick={() => setColour("purple")}>Purple</button>
            <button className='btn pink' onClick={() => setColour("pink")}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App