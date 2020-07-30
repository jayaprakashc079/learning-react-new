import React from 'react';

class Button extends React.Component{

    render(){
        var x = 0;
        return(
        <button onClick={this.props.onClick}>{this.props.value}</button>
        );
    }
}
export default Button;