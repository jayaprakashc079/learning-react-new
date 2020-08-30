import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withFormsy } from 'formsy-react';


class SwitchCheck extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: this.props.defaultValue
    }
  }


  handleChange = (event) => {
    this.props.setValue(event.target.checked);
    this.setState({
      value: event.target.checked,
    })
  };

  componentDidMount=()=>{
    this.props.setValue(this.props.defaultValue)
} 

    render(){
        return (
            <>
              <FormGroup row> 
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.value?true:this.props.checked}
                      onChange={this.handleChange}
                      name={this.props.name}
                      //value={this.props.value}
                      defaultValue={this.props.defaultValue}
                    />
                  }
                  label={this.props.label}
                />
              </FormGroup>
            </>
          );
    }

}

export default withFormsy(SwitchCheck)