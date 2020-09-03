import React from "react";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";


class Edit extends  React.Component{

  render(){
    return (
        <div style={{position:"relative"}}>
          <Fab style={{width:"34px", height:"26px", position:"absolute", right:'15px', bottom:'10px'}} color="primary" aria-label="edit" onClick={this.props.onClick}>
            <EditIcon style={{width:"18.5px", height:"18px"}}/>
          </Fab>
        </div>
      );

  }
  
}

export default Edit;

