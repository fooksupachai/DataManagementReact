import  React, {Component} from 'react'

class Child extends Component {

    constructor(props){
        super(props)
        this.state = {
            mockData : 1
        }

        this.sendDataToParent = this.sendDataToParent.bind(this)
    }

    sendDataToParent(){
        const data = parseInt(this.state.mockData) * 2
        this.props.ParentSendData(data)
    }



    render () {
        return (<div>
            <button onClick={this.sendDataToParent}>FromChild</button>
        </div>)
    }
}

export default Child