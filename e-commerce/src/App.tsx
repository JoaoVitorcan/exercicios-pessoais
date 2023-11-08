import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch('https://api.kanye.rest/')
      const res = await req.json()
      setData(res.quote)
    }
    fetchData()
  }, [])


  return (
    <>
      <h1>{data}</h1>
    </>
  )
}

export default App
