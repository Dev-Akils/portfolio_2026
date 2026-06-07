
import './App.css'
import Header from './components/Header'
import HeroDetails from './components/HeroDetails'
import AboutMe from './pages/AboutMe'
import HeroSection from './pages/HeroSection'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Proffessional from './pages/Proffessional';
import Project_Details from './pages/Project_Details';
import Footer from './components/Footer'
function App() {


  return (
   <>
   <div className='w-screen h-full overflow-hidden'>
   <Header/>
   <HeroDetails/>
   <HeroSection/>
   <AboutMe/>
   <Skills/>
   <Education/>
   <Proffessional/>
   <Project_Details/>
   <Footer/>
   </div>
  
   </>
  )
}

export default App
