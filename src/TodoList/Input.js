import React from 'react';

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
            <input 
                onChange={this.onChangefun}
                placeholder='Type text'
                type='text'
                value={this.props.value}
            />
        );
        
    }
}

export default Input;