import React , {Component} from 'react';

class AdvantageReact extends Component{
          
    render(){

        var results = this.props.playersFootball;

        return(
            <div>
              {
                 results.map((result,index)=><li key={index}>{result}</li>)
              }
            </div>
        )
    }
}

class Names extends Component {
    render(){
    var names = ['Ronaldo', 'Messi', 'pele', 'kaka', 'zidane'];
    return(
        <div>
            <AdvantageReact playersFootball = {names}/>
        </div>
    )
    }
}

export default Names