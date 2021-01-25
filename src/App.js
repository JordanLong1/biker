/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import BikeTracker from './components/BikeTracker';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BikeTracker />
      <Footer />
    </div>
  );
}

export default App;
