import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div>
                <label 
                    value={this.props.label}
                >  
                </label>
                <input 
                    onChange={(e)=> this.props.onChange(e.target.value)}
                    placeholder={this.props.placeholder}
                    type='text'
                    value={this.props.value}
                />
            </div>
            
        );
        
    }
}

export default Input;