import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/assets/pages/homepage";
import About from "../src/assets/pages/agentspage"
import ScrollToFooter from "./assets/components/scroll";

export default function App() {
  return (
    <Router>
      <ScrollToFooter/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}