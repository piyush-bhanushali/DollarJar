import React, { Component } from "react";

class Jar extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            newUser : '',
            users : []
        };
    }

    // addUser = (e)=>
    // {
    //     e.preventDefault()

    //     const us=e.target.value
    //     console.log(<p>your value us is={us}</p>);
    //     this.setState({
    //         newUser:us,
    //         users: [...this.state.users,us]
    //     });
    //     console.log("Add User")
    //     console.log(this.state.newUser)
    //     console.log(this.state.users)
    // }

    changeUserInput(input){
        this.setState({
            newUser:input
        },()=>console.log(input))
    }
    addToList(input){
        let userArray = this.state.users;

        userArray.push(input);

        this.setState({
            users:userArray
        })
    }

    render(){
        return (
            <div>
                <h1>Hello {this.props.location.uname}</h1>
                <br/>
                {/* <form onSubmit = {this.addUser}> */}
                <input type="text" name="newUser" onChange= { (e)=>this.changeUserInput(e.target.value)} value={this.state.newUser}/>
                <button onClick={ ()=>this.addToList(this.state.newUser) }>Add</button>
        {/* <input type="button" name="add" value="Add"/> */}
        {/* <p>your value is {this.state.newUser}</p> */}
                {/* </form> */}
                <ul>
        {this.state.users.map( (val)=> <li><span>[ + ]</span>{val}<span>[ - ]</span></li>)}
                </ul>
            </div>
        );
    }
}
export default Jar;