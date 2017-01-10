import React from 'react'
import Component2 from './Component2'

class Component1 extends React.Component {
    render() {
        return <div>
            I am {this.props.name} and I am inside Component 1.
            <Component2 />
        </div>
    }
}

export default Component1;
