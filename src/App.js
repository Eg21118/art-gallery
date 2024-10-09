import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtDetail from './components/ArtDetail';
import Gallery from "./pages/Gallery";
import ArtDetailPage from "./pages/ArtDetailPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/art/:id" element={<ArtDetailPage />} />
        <Route path="/art/:id" component={ArtDetail} />
      </Routes>
    </Router>
  );
}

export default App;
