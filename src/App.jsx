import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyServices from './components/MyServices'
import GetInform from './components/GetInform'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className=''>

      <Navbar/>
      <Hero/>
      <About/>
      <MyServices/>
      <GetInform/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App