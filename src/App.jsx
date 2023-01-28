import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Job from "./pages/Job/Job";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </div>
  );
}

export default App;
