import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage";
import Avalon from "./avalon";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/avalon" element={<Avalon />} />
      </Routes>
    </Router>
  );
}

export default App;
