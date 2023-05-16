import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "./pages/Timer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* // BrowserRouter
      // Routes
      // Route */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Timer />}></Route>
          <Route path="/timer" element={<Timer />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
