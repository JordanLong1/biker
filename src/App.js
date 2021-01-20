import React from 'react'; 
import BikeTracker from './components/BikeTracker'
import Navigation from './components/Navigation'
function App() {
  return (
    <div className="App">
    <Navigation />
      <BikeTracker />
    </div>
  );
}

export default App;
