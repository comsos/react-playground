import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: 'Hello!',
            name: null
        }
    }
    changeMessage(){
        this.setState({
            message: 'Welcome!',
            name: 'Cosmos'
        })
    }
    render() {
        return(
            <div>
                <h1>{this.state.message} {this.state.name}</h1>
                <button onClick={() => this.changeMessage()}> Subscribe </button>
            </div> 
        )
    }
}

export default Message