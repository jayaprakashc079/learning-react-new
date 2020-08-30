import React from 'react';
import Input from './Input';
import Date from './Date';
import SwitchCheck from './SwitchCheck';
import Gender from './Gender';

const Styles = ({
    root: {
      display: 'flex',
    },
    textField: {
      width: '100ch',
    },
  });


class NewPerson extends React.Component{

    render(){
        const classes=this.props;
        return(
                <div className={classes.root} key={this.props.id}>
                    {!this.props.enable && 
                    <h4>Dependant Person {this.props.id}:-</h4>}
                    <Input
                            name={this.props.id +'.Person'}
                            validationError="Required value" 
                            label="Card holder name" 
                            type='text' 
                            defaultValue={this.props.defaultPerson}
                            required
                    />
                    <br/>
                    <Input
                            name={this.props.id +'.FatherName'}
                            validationError="Required value" 
                            label="Son/daughter of" 
                            type='text' 
                            defaultValue={this.props.defaultFather}
                            required
                    />
                    <Date 
                        value="Date of birth.."
                        name={this.props.id +'.DOB'}
                        label="Date of birth.."
                        defaultValue={this.props.defaultDOB}
                    />
                    <Gender
                        name={this.props.id +'.gender'}
                        defaultValue={this.props.defaultGender}
                        required
                    />
                    {this.props.enable &&
                        <SwitchCheck
                            name={this.props.id +'.isHead'}
                            label="Is head of the family"
                            defaultValue={this.props.defaultHead}
                            required
                    />}
                </div>
        );
    }
}

export default NewPerson;