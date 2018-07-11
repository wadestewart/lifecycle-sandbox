import React, { PureComponent } from 'react'

export default class AboutPage extends PureComponent {
    constructor() {
        super()

        this.state = {
            counter: 0
        }

        this.decrementCounter = this.decrementCounter.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
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

    componentWillUpdate() {
        console.log('The Component WILL Update...')
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps == nextState) {
    //         console.log('Should the Component Update?')
    //     }
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
