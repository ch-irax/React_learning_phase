import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-lg">Tailwind Test</h1>
      <Card username = "MAXX"  btnText = "Here!" point ="Props in Tailwind" myArray={[1, 2, 3]} />
      <Card username = "Quir"  btnText = "Strike" myObj={{ name: "max", age: 20 }} />
      <Card username = "Maverick" btnText = "Click me" />
    </>
  )
}

export default App 