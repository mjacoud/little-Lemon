import { useState } from 'react'
import './App.css'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { HeroSection } from './components/HeroSection/HeroSection'
import { Specials } from './components/Specials/Specials'
import { Testimonials } from './components/Testimonials/Testimonials'


function App() {
  const [isMenuOpen,setMenuOpen] = useState<boolean>(false)
  
  return (
    <>
         <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
           {isMenuOpen == false ? 
           <>
           <HeroSection/>
           <Specials/>
           <Testimonials/>
           <About/>
        <Footer/>
        </> 
        : <></>}
    </>
  )
}

export default App
