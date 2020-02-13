import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

function App() {
  return (
    //<div>
    //  <HomePage />
    //</div>
    <Router>
      <Switch>
        <Route path="/" component = {Home}/>
        <Route path="/about" component = {About}/>
      </Switch>
    </Router>

  );
}

export default App;