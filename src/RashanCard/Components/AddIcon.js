
import React from 'react';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/Add';

class AddIcon extends React.Component {

render(){
    return (
        <div  style={{position:"relative"}}>
          <Fab style={{position:"absolute", backgroundColor:"#000000", right:'0', bottom:'-5px'}} color="primary" aria-label="add" onClick={this.props.onClick}>
            <Icon />
          </Fab>
        </div>
      );
    }
}

export default AddIcon;

