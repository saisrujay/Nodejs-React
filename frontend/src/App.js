import React, {useEffect, useState} from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import One from "./pages/one.js";
import Two from "./pages/two.js";
import Three from "./pages/three.js";
import Four from "./pages/four.js";
import Five from "./pages/five.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three /> } />
        <Route path="/four" element={<Four /> } />
        <Route path="/five" element={<Five />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
