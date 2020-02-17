import React, { Component } from "react";
import Jar from "./Jar";
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";

class Home extends Component {

    state = {
        name: "",
    }
    btnClick1 = (e)=>
    {
        e.preventDefault();
        const name = e.target.value;
        this.setState({
            name : name,
        })
    }

    render() {
        return (
                <div>
                        <input type="text" onChange={this.btnClick1} placeholder="Enter Your Name" name="name" value={this.state.name} />
                        <br />
                        <Link to={{pathname: '/jar', uname:this.state.name}}>
                        <button  type="submit"  name="name">Submit</button>
                        </Link>
                </div>
        )
    }
}

export default Home;