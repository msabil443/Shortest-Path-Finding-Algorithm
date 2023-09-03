import React from 'react';
import './App.css';
import PathfindingVisualizer from './pathfindingvisualizer/pathfindingvisualizer'; 
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
