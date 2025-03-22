import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Layer - Ensure Full Coverage */}
      <div className="fixed inset-0 -z-10 h-screen w-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
