import React from 'react';
import './Style.css'

class Button extends React.Component{

    render(){
        var x = 0;
        return(
        <button className='button' 
                onClick={this.props.onClick}
        >
            {this.props.value}
        </button>
        );
    }
}
export default Button;