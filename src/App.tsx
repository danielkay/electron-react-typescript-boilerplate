import React from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {Main} from "./components/layout/Main";
import config from "./config";

function App() {
  return (
    <div className="App">
      <Header windowTitle={config.title} />
      <Main />
    </div>
  );
}

export default App;
