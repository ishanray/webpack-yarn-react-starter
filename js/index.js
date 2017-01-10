import React from 'react'
import {render} from 'react-dom'
import Component1 from './Component1'

class App extends React.Component {
    render() {
        return <div>
            hello world
            <Component1 name="Component 2" />
        </div>
    }
}

render(<App/>, document.getElementById('app'))
