import React from 'react';
import {withFormsy} from 'formsy-react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



class Input extends React.Component{

    constructor(props){
        super(props);
        this.state={
            blur:false
        }
       
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                blur: false
            });
        }
    }
    
    onBlur =()=>{
        console.log('asdfsdafadsf');
        this.setState({
            blur:true
        })
    }

    onFocus =()=>{
        this.setState({
            blur:false
        })
    }

    changeValue=(e)=>{
        this.props.setValue(e.target.value);
    }
    
    

    render(){
        const errorMessage =this.props.errorMessage;
        return(
            <>
                <TextField 
                    id="standard-basic" 
                    label={this.props.label}
                    type='text' 
                    onChange={this.changeValue}
                    placeholder="Enter text"
                    value={this.props.value || ''} 
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    error={this.state.blur && this.props.errorMessage}
                    helperText={this.state.blur && this.props.errorMessage}
                />

            </>
            
        );
    }

}

export default withFormsy(Input);