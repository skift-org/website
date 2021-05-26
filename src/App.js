import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Social from './components/Social'
import Footer from './components/Footer'
import Features from './components/Features'
import Contribute from './components/Contribute'
import About from './components/About'
import Download from './components/Download'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About/>
      <Contribute/>
      <Features />
      <Download/>
      <Social />
      <Footer />
    </div>
  );
}

export default App;
