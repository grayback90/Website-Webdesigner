import React from "react";
//CSS
import "./components/css/App.css"
//Components
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing"


function App() {
  return (
    <main className="app_background">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
}

export default App;
