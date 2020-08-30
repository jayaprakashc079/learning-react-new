import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withFormsy } from 'formsy-react';

class Gender extends React.Component{
  constructor(props){
    super(props);
    this.state={
      checked:this.props.defaultValue
    }
  }

  handleChange = (event) => {
    this.props.setValue(event.target.value);
  }
  componentDidMount=()=>{
    this.props.setValue(this.props.defaultValue)
  }

  componentDidUpdate=(preProps)=>{
    if (preProps.checked != this.props.checked)
      this.setState={
        checked:this.props.checked
      }

  }
  render(){
    return(
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup 
        aria-label="gender" 
        name={this.props.name}
        onChange={this.handleChange}
        checked={this.state.checked}
        defaultValue={this.props.defaultValue}
      >
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

    );
  }
}

export default withFormsy(Gender);
