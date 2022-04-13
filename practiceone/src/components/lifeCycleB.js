import React,{Component} from 'react';

class LifeB extends Component {

    constructor(){
        super()
        this.state = {
            name : "Sivraman k"
        }
       console.log("This Is a Constructor Life-B"); 
    }

    static getDerivedStateFromProps(){
        console.log("This is static getDerivedStateFromProps from Life-B");
        return null;
    }

    render(){

        console.log("This is the render in Life-B")
        return(
            <div>
                 <p>Mounting Life_B</p>
            </div>
        )
    }

    componentDidMount(){
        console.log("This is component did mount in Life-B")
    }
}

export default LifeB