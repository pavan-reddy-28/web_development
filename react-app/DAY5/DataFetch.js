import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DataFetch extends Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
}
componentDidMount(){
    const url ="https://api.github.com/users/hacktivist123/repos"
    fetch(url).then(resp=>{
        console.log(resp)
       return resp.json();
    }).then(data=>console.log(data))
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
