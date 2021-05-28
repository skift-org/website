import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Social from './components/Social'
import Footer from './components/Footer'
import Features from './components/Features'
import Contribute from './components/Contribute'
import Download from './components/Download'
import Goals from './components/Goals'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Goals/>
      <Contribute/>
      <Features />
      <Download/>
      <Social />
      <Footer />
    </div>
  );
}

export default App;
