import React from 'react';
import Formsy from 'formsy-react'
import Button from './ButtonControl';


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            canEnable:false
        }
    }

    enableButton=()=>{
        this.setState({
            canEnable:true
        });
    }

    disableButton=()=>{
        this.setState({
            canEnable:false
        });
    }

    submit=(model)=>{
        this.props.submit(model);
        this.refs.form.reset();
    }


    render(){
        return(
            <div>
                <Formsy
                     onValidSubmit={this.submit} 
                     ref='form'
                     onValid={this.enableButton}
                     onInvalid={this.disableButton}
                     name="Newperson"
                >
                    
                    {this.props.children}
                    <Button
                        type="submit"
                        value={this.props.btnText}
                        disabled={!this.state.canEnable}
                    />
                </Formsy>
            </div>
        );
    }
}

export default Form;