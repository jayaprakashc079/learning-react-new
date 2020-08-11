import React from 'react';
import TodoCard from './TodoCard';


class List extends React.Component{

    render(){
        const { classes } = this.props;
       
        return(
            <>
                {this.props.list.map((val, id)=> 

                <TodoCard id={id} 
                          value={val.value}
                          btnClick={this.props.btnClick}
                          btnName={this.props.btnName}
                />    
                )}
            </>
        );
    }
}

export default List;