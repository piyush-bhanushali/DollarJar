import React, { Component } from "react";

class Jar extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            userData:{
                uid : '',
                name : '',
                balance: 0
            },
            userList: [],
            total: 0,
            panalty:10
        }
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

    
    handleChange = (e) =>{
        let user = e.target.value;
        let id = this.state.userList.length+1;
        console.log(user);
        
        this.setState({
            userData:{
                uid : id,
                name : user,
                balance: 0
            }
        })
    } 

    handlerAddBtn = () =>{
        let userData = this.state.userData;
        this.setState({
            userList: [...this.state.userList,userData]
        })
        console.log(this.state.userList);
    }

    addPanelty(item){
        console.log(item);
        item.balance += this.state.panalty; 
        this.setState({
            total: this.state.total +  this.state.panalty
        })   
    }

    substractPanelty(item){
        item.balance -= this.state.panalty; 
        this.setState({
            total: this.state.total -  this.state.panalty
        })
    }

    render(){
        return (
            <div>
                <h1>Hello {this.props.location.uname}</h1>
                <br/>
                {/* <form onSubmit = {this.addUser}> */}
                <input
                    type="text" id="user"
                    name="user" placeholder="Enter User Name"
                    value={this.state.userData.name}
                    onChange = {this.handleChange}
                />
                <button type="reset" onClick={this.handlerAddBtn}>add</button>
        {/* <input type="button" name="add" value="Add"/> */}
        {/* <p>your value is {this.state.newUser}</p> */}
                {/* </form> */}
                <h3>Total = {this.state.total} </h3>
                {
                    this.state.userList.map((user)=>{
                        
                        //
                        return <div key={user.uid}>
                        <ul>
                            <li> {user.name} <button type="button" onClick={() => this.addPanelty(user)}> + </button> {user.balance} <button type="button" onClick={() => this.substractPanelty(user)}> - </button></li>
                        </ul>
                        </div>
                        //
                    })                        
                }
            </div>
        );
    }
}
export default Jar;