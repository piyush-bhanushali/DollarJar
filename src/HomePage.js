import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import DollarJar from "./DollarJar";
import App from "./App";

class HomePage extends Component {

    state = {
        name: "",
        redirect: false
    }

    namechange = (e) => {
        e.preventDefault();
        const name = e.target.elements.email.value;
        console.log(name);
        this.setState({
            name: name,
            redirect: true
        })

    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path = "/" component = {HomePage}/>
                    <Route path = "/DollarJar" component = {DollarJar}/>
                </Switch>
            </Router>
        );
    }

    
}
function HomePage() {
    <div>
            <DollarJar name={this.state.name}/>
                <div>
                    <h1> Welcome</h1>
                    <div>
                        <form onSubmit={this.namechange}>
                            <input type="text" placeholder="" name="email" /> 
                            <button name="enter" type="submit">Click</button>
                        </form>
                    </div>
                </div>
        </div>
}

export default HomePage;