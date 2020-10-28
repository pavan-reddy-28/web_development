import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    updateCount(){
        this.setState((prevState)=> {return {count:prevState.count+1}})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.updateCount()} >Update Count</button>
            </div>
        )
    }
}
