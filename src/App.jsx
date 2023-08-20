import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/project" element={<h1>Projects</h1>} />
        <Route path="/contact" element={<h1>Contact Me</h1>} />
        <Route path="/resume" element={<h1>Resume</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
