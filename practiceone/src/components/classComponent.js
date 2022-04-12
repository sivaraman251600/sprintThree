import { Component } from 'react';

class DemoTwo extends Component{

    constructor(){
        super()
        this.state = {
            name : 'praveen'
        }
    }

    changeName(){
        this.setState({
            name : 'prashant'
        })
    }

    render(){
        return(
            <div>
                <p>This Is a class component</p>
                <p>{this.state.name}</p>
                <button onClick={()=>this.changeName()}>Change Name</button>
            </div>
        )
    }
}

export default DemoTwo