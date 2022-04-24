import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Groesbeek from "./routes/groesbeek";
import Nijmegen from "./routes/nijmegen";
import Home from "./routes/home";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groesbeek" element={<Groesbeek />} />
        <Route path="/nijmegen" element={<Nijmegen />} />
      </Routes>
    </div>
  );
}

export default App;
