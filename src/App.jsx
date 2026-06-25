import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Portrait from "./components/Portrait";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portrait />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;