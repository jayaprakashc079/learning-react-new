import React from 'react';
import './Style.css'

class Button extends React.Component{

    render(){
        var x = 0;
        return(
        <div className='tab-item' onClick={this.props.onClick}>{this.props.value}</div>
        );
    }
}
export default Button;