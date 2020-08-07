import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <input 
                onChange={(e)=> this.props.onChange(e.target.value)}
                placeholder={this.props.placeholder}
                type='text'
                value={this.props.value}
            />
        );
        
    }
}

export default Input;