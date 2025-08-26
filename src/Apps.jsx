import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <Navbar/>
      <MainContent/>
      <Footer/>
      <ScrollToTop/>
    </Router>
  )
}

export default App
