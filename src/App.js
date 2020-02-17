import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Home from './Home';
import Jar from './Jar';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/jar' component={Jar}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
