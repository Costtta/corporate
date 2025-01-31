import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Works from './components/Works'
import Teams from './components/Teams'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import './components/style/style.css'


function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Works />
      <Teams />
      <Testimonials />
      <Pricing />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
