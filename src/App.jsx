import { useState } from 'react'
import Marquee from "react-fast-marquee";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='title'>
        <h1 className='roboto-black'>BE YOUR<br/><span className='title_creative'>CREATIVE</span> PARTNER</h1>
      </div>
      <div className="news">
        <Marquee>
          <p>ここにニュースが入ります。ここにニュースが入ります。ここにニュースが入ります。</p>
        </Marquee>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
