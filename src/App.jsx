
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/Navbar/Navbar'
import Sponsored from './components/sponsored/Sponsored'
import About from './components/aboutPage/AboutPage'
import Collection from './components/collection/Collection'
import Feature from './components/feature/Feature'
import TopCreator from './components/topCreator/TopCreator'
import FAQ from './components/faq/FAQPage'
import Faq from './components/faq/Faq'  
import CTA from './components/cta/CTA'
import Footer from './components/footer/footer'
function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Sponsored />
        <About />
        <Collection />
        <Feature />
        <TopCreator />
        <FAQ />
        <Faq/>
        <CTA />
        <Footer />
  
    </>
  )
}

export default App
