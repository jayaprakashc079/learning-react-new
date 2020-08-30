import React from 'react';
import Button from '@material-ui/core/Button'


class ButtonControl extends React.Component{

    render(){
        return(

            <Button
                variant="contained" 
                color="secondary" 
                disableElevation
                disabled={this.props.disabled}
                type='submit'
            >
                {this.props.value}
            </Button>
        );
    }
}

export default ButtonControl;