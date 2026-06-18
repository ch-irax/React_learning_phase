import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [Length, setLength] = useState(8)
  const [num_allowed, setnum_allowed] = useState(false)
  const [char_allowed, setchar_allowed] = useState(false)
  const [Password, setPassword] = useState(``)

  const pass_generator = useCallback(() => {
    let pass = ``
    let string = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
    if (num_allowed) {
      string += `0123456789`
    } if (char_allowed) {
      string += `!@#$%^&*~{}[]-_:;?/+`
    }

    
    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random * string.length + 1)
      pass = string.charAt(char)
    }

    setPassword(pass)

  }, [Length, num_allowed, char_allowed, setPassword])

  return (
    <>
      <h1 className='text'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <input type="text"
          value={Password}
          placeholder='password'
          readOnly
        />
        <button>Copy</button>
        </div>
        <div></div>
    </>
  )
}

export default App
