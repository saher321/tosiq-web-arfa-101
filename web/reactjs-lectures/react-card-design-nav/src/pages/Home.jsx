import React, { useEffect, useState } from 'react'
import WebLayout from '../layouts/WebLayout'

const Home = () => {
  const [data, setData] = useState(0);
  
  useEffect (()=>{
    console.log("Hello from useEffect()")
  })

  useEffect (()=>{
    console.log("Hello from useEffect() using empty dependency array")
  }, [])

  useEffect (()=>{
    if (data == 10) {
      console.log("Hello from useEffect() using condition")
    }
  }, [data])


  return (
    <WebLayout>
      Home page
      <br />
      <button className='p-1 bg-black rounded m-4 text-white' onClick={() => setData(data+1)}>Click {data}</button>
    </WebLayout>
  )
}

export default Home
