import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LifeCycleMethods extends React.Component {
    componentWillMount(){
        console.log("COMPONENT WILL MOUNT");
        console.log(ReactDOM.findDOMNode(this));
    }
    
    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
        console.log(ReactDOM.findDOMNode(this));
    }
    
    render() { 
        return (
            <div>
                <h1>React DOM</h1>
            </div>
        );
    }
}
 
export default LifeCycleMethods;