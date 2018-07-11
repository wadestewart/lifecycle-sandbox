import React, { Component } from 'react'

export default class AboutPage extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.decrementCounter = this.decrementCounter.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
    }

    decrementCounter() {
        let { counter } = this.state
        counter--

        this.setState({
            counter
        })
    }

    incrementCounter() {
        let { counter } = this.state
        counter++

        this.setState({
            counter
        })
    }

    render() {
        return(
            <div>
                <h2>{this.props.message}</h2>
                <p>{this.state.counter}</p>
                <button onClick={this.decrementCounter}>-</button>
                <button onClick={this.incrementCounter}>+</button>
            </div>
        )
    }
}
