import React,{Component} from 'react';
import LifeB from './lifeCycleB';

class LifeA extends Component {

    constructor(){
        super()
        this.state = {
            name : "Sivraman k"
        }
       console.log("This Is a Constructor Life-A"); 
    }

    static getDerivedStateFromProps(){
        console.log("This is static getDerivedStateFromProps from Life-A");
        return null;
    }

    render(){

        console.log("This is the render in Life-A")
        return(
            <div>
                 <p>Mounting Life Cycle Life_A</p>
                 <LifeB />
            </div>
        )
    }

    componentDidMount(){
        console.log("This is component did mount in Life-A")
    }
}

export default LifeA