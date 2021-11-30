import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../Home"
import './App.css';

class App extends React.Component {
  render() {
      return (
          <div>
              <Routes>
                  <Route path="/" element={<Home/>} />
              </Routes>
          </div>
      );
  }
}

export default App;
