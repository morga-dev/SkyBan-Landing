import Cursor from './components/Cursor';
import Particles from './components/Particles';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Benefits from './sections/Benefits';
import Products from './sections/Products';
import Sectors from './sections/Sectors';
import IntellectualProperty from './sections/IntellectualProperty';
import Sustainability from './sections/Sustainability';
import CTA from './sections/CTA';
import Blog from './sections/Blog';

function App() {
  return (
    <>
      <Cursor />
      <Particles />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Products />
        <Sectors />
        <IntellectualProperty />
        <Sustainability />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
