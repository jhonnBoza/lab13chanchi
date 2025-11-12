import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Entities from './components/Entities'

function App() {
  const [flags, setFlags] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      const data = await response.json()
      console.log(data)
      setFlags(data)
    }
    fetchCountries()
  }, [])

  return (
    <>
      <Hero />
      <Entities data={flags} />
    </>
  )
}

export default App
