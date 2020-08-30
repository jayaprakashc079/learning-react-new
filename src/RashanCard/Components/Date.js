import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withFormsy } from 'formsy-react';

const useStyles = ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
});

class Date extends React.Component{

    changeValue=(e)=>{
        this.props.setValue(e.currentTarget.value);
    }
    componentDidMount=()=>{
      this.props.setValue(this.props.defaultValue)
  }

  render(){
    const classes = this.props;
    return (
        <form className={classes.container} noValidate>
          <TextField
            name={this.props.name}
            id="date"
            label={this.props.label}
            type="date"
            className={classes.textField}
            defaultValue={this.props.defaultValue}
            value={this.props.value||''}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.changeValue}
          />
        </form>
      );

  }
  
}

export default withFormsy(Date);