// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        console.log(props.initialCount)
        super()

        this.state = {
        secondsLeft : props.initialCount

    }
}

    render(){

        console.log(this.state.secondsLeft)
        const message = this.state.secondsLeft === 0 ? `Boom!`: `${this.state.secondsLeft} seconds left before I go boom!`
        return (

            <div>
                {message} 
            </div>
        )
    }
}