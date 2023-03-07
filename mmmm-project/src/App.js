import './App.css';
import CoverPage from './pages/CoverPage';
import DisclaimerPage from './pages/DisclaimerPager';
import AboutPage from './pages/AboutPage';
import DocPage from './pages/DocPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/Layout';
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<CoverPage/>} />
          <Route path="disclaimer" element={<DisclaimerPage/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="documentation" element={<DocPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
