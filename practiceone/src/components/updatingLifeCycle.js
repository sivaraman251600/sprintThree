import React,{Component} from 'react';

class UpdatingA extends Component {

    constructor(){
        super()
        this.state = {
            name : "Sivraman k"
        }
       console.log("This Is a Constructor Updating-A"); 
    }

    ChangeMessage = () =>{
        this.setState (
            {
            name : "sivaraman"
        }
        )
    }

    static getDerivedStateFromProps(){
        console.log("This is static getDerivedStateFromProps from Updating-A");
        return null;
    }

    shouldComponentUpdate(){
        console.log("This is shouldComponentUpdate in Updating-A")
        return true
    }

    render(){

        console.log("This is the render in Updating-A")
        return(
            <div>
                 <p>Updating Life Cycle Updating-A</p>
                 <button onClick={()=>this.ChangeMessage()}>Change Message</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate(){
        console.log("This is getSnapshotBeforUpdate in Updating-A");
        return null
    }

    componentDidMount(){
        console.log("This is component did mount in Updating-A")
    }

    componentDidUpdate(){
        console.log("This is ComponentDidUpdate in Updating-A")
    }
}

export default UpdatingA