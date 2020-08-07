import React from 'react';

class Date extends React.Component{

    render(){
        return(
            <div className={this.props.className}>
                <label>{this.props.label}</label>
                <input 
                    type="date" 
                    onChange={(e)=>this.props.onChange(e.target.value)}
                    defaultValue={this.props.value}
                    value={this.props.value}>
                </input>
            </div>
       );
    }
}

export default Date;