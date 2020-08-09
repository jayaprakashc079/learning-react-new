import React from 'react';

class Input extends React.Component{

    render(){

        return(
            <input 
                type='text' 
                onChange={(e)=>this.props.onChange(e.target.value)}
                placeholder="Enter text"
                value={this.props.value} 
            >
            </input>
        );
    }

}

export default Input