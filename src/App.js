import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage";
import Avalon from "./avalon";
import Calendar from "./calendar";
import VinylTap from "./vinyltap";
import RWC from "./rwc";
import { ScrollToTop } from "./scrollToTop";
import { BackToTopButton } from "./backToTopButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/avalon" element={<Avalon />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/vinyltap" element={<VinylTap />} />
        <Route path="/rwc" element={<RWC />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
