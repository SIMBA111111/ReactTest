import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [res1, setRes1] = useState(null)
  const [res2, setRes2] = useState(null)

  axios.get('http://89.169.1.160:8000/api/back1/back1')
  .then((res) => {
    console.log("res1");
    setRes1(res.data)
  })
  .catch((e) => {
    console.log("error: ", e);
  })

  axios.get('http://89.169.1.160:3000/api/back2/back2')
  .then((res) => {
    console.log("res2");
    setRes2(res.data)  
  })
  .catch((e) => {
    console.log("error: ", e);
  })
  
  return (
    <>
      <div>
        {res1}
      </div>
      <div>
        {res2}
      </div>
    </>
  )
}

export default App
