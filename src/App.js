import React from 'react';
import './App.css';
import Gepeles from './komponens/kiegeszit';
import Model from './model/model';
function App() {
  const model = new Model();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tanuljunk angolul!</h1>
      </header>
      <Gepeles model={model} />
    </div>
  );
}

export default App;


