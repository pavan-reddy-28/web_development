import React, { Component } from 'react'

export default class UserInput extends Component {
   constructor(props) {
       super(props)
       this.state = {
            users:[],
            name:""
       }
   }
   
   onDataInput(e){
    console.log(e.target.value);
    this.setState({name:e.target.value})
   }
   enterData(){
        let array = this.state.users;
        array.push(this.state.name)
       this.setState({ users:array ,name:""  })   
   }
    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.name} onChange={(e)=>this.onDataInput(e)} />
                    <button onClick={()=>this.enterData()}>Insert</button>
                </div><br/>
                <div>
        <p>
            Values from {" "} 
            <b>{this.state.users.length>0?this.state.users[this.state.users.length-1]:"....."}</b>
            {"   to   "}
            <b>{this.state.users.length>1?this.state.users[this.state.users.length-2]:"....."}</b> 
            </p>
                </div>
            </div>
        )
    }
}
