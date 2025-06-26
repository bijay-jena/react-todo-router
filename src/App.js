import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoDetails from "./pages/TodoDetails";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
