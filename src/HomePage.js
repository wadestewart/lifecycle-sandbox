import React, { Component } from 'react'

export default class HomePage extends Component {
    constructor() {
        super()

        console.log('Home: In the constructor')
    }

    componentWillMount() {
        console.log('Component will mount, jerk! - You are gonna be deprecated anyways!')
    }

    componentDidMount() {
        console.log('Did the component mount?')
    }

    componentWillUnmount() {
        console.log('Unmount, anyone?')
    }
    
    render() {
        console.log('Home: In render')
        return(
            <div>
                <h2>{this.props.message}</h2>
            </div>
        )
    }
}
