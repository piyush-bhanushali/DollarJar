import React, { Component } from "react";
import DJar from "./DJar";
import {BrowserRouter as Router,Switch,Route,Link, Redirect} from "react-router-dom";

class HomePage extends Component {

    state = {
        name: "",
        redirect: false
    }

    submitChnage = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        //console.log(name);
        this.setState({
             name: name,
             redirect: true 
        })

    }

    render() {
        if(this.state.redirect)
        {
            return <Redirect to={{

                pathname: '/djar',
                state:{
                    name:this.state.name
                }
            }}/>
        }
        return (
                        <div>
                            <form onSubmit={this.submitChnage}>
                                <input type="text" placeholder="Enter Your Name" name="name" />
                                <br />
                                <button name="enter" type="submit">Submit</button>
                            </form>
                        </div>
        )
    }
}

export default HomePage;