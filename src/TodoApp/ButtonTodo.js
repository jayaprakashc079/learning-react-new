import React from 'react';
import '../TodoList/Style.css'
import Button from '@material-ui/core/Button'


class ButtonTodo extends React.Component{

    render(){
        return(

            <Button 
                variant="contained" 
                color="secondary" 
                disableElevation
                disabled={this.props.disabled}
                type='submit'
                onClick={this.props.onClick}
            >
                {this.props.value}
            </Button>
        );
    }
}

export default ButtonTodo;