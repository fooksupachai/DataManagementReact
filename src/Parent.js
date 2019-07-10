import  React, {Component} from 'react'
import Child from './Child'

class Parent extends Component {

    constructor(props){
        super(props)
        this.state = { 
            objA : null
        }

        this.sendDataToChild = this.sendDataToChild.bind(this)
        this.checkState = this.checkState.bind(this)
    }

    sendDataToChild(dataFromChild){
        this.setState({ objA : dataFromChild})
    }

    checkState(){
        console.log(this.state.objA)
    }

    render () {
        return (<div>
            <Child ParentSendData={this.sendDataToChild} />
            <button onClick={this.checkState}>checkState</button>
        </div>)
    }
}

export default Parent