import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import FoodApp from "./components/FoodApp"
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodApp></FoodApp>
      </div>
    );
  }
}
export default App;
