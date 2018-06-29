import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PizzaContainer from './components/PizzaContainer/PizzaContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={PizzaContainer} />

        </div>
      </Router>
    )
  }
}

export default App;
