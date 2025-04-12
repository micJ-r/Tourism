import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Destination from './components/Destination';
import TourDetails from './components/TourDetails';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={ <Header/>}/> */}
          <Route path="/destinations" element={<Destination />} />
          <Route path="/tours" element={<TourDetails />} />
        </Routes>
        <TourDetails/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
