import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-8">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
