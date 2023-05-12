import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      {/* 
        --- For Routing---
      1. BrowserRouter-
      2. Routes -
      3. Route
      */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/homepage" element={<Homepage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
