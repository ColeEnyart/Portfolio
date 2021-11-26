import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/portfolio" element={<About/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/work" element={<Work/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/resume" element={<Resume/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
