import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

class Input extends React.Component{
    constructor(props){
        super(props);

        // this.onChangefun = this.onChangefun.bind(this);
    }
   
    onChangefun = (e) => {
        this.props.onChange(e.target.value);
    };

    render(){
        return(
            <div className={this.props.className}>
            <label>{this.props.label}</label>
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