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
        <Route path="/users/bmw-mercedes-income" element={<One />} />
        <Route path="/users/male-expensive-phone" element={<Two />} />
        <Route path="/users/last-name-starts-with-m" element={<Three /> } />
        <Route path="/users/bmw-mercedes-audi-no-digit-email" element={<Four /> } />
        <Route path="/cities/top-10-users" element={<Five />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
