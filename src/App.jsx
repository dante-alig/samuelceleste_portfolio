import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Nav from "./components/nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";

library.add(faArrowUpRightFromSquare);

function App() {
  const parallax = useRef(null);

  return (
    <Router>
      <Nav parallaxRef={parallax} />
      <Routes>
        <Route path="/" element={<Home parallaxRef={parallax} />} />
      </Routes>
    </Router>
  );
}

export default App;
