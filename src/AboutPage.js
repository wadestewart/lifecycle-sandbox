import React, { Component } from 'react'

export default class AboutPage extends Component {
    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.decrementCounter = this.decrementCounter.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        // this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
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

    componentDidUpdate() {
        console.log('The Component DID Update...')
    }

    componentWillReceiveProps() {
        console.log('Props Received!')
    }

    componentWillUpdate() {
        console.log('The Component WILL Update...')
    }

    // shouldComponentUpdate() {
    //     console.log('Should the Component Update?')
    // }

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
