import React from 'react';
import Date from './Components/Date';
import Input from './Components/Input';
import './index.css'
import Button from './TodoList/Button';

class RashanCard extends React.Component{
    constructor(props){
        super(props);
        this.state={config:[],
            DOB:'', 
            Name:'',
            fatherName:'',
        }
    }

    getDate = (val) =>{
        this.setState({
                DOB:val
            })
      }
    getName =(val) =>{
        this.setState({
                Name:val
            })
    }
    getFatherName =(val) =>{
        this.setState({
            fatherName:val
        })
    }

    clearVal =() =>{
        this.getDate('');
        this.getName('');
        this.getFatherName('');
    }

    AddFamily =()=> {
        const list=this.state.config;
        list.push({
            Id:list.length,
            Name:this.state.Name,
            fatherName:this.state.fatherName,
            DOB:this.state.DOB
        })

        this.setState({
            config:list
        }, console.log(this.state.config))
        this.clearVal();
    }

    componentDidMount =()=>{
        
    }
    render(){
        return(
            <React.Fragment>
                <h2>Add family details.....</h2>
                <Input 
                       className="game"
                       value={this.state.Name}
                       label="Name of the person:"
                       placeholder="Enter name..."
                       onChange={this.getName}
                />
                <Input 
                       className="game"
                       label="Son of(S/O)/wife of(W/O):"
                       value={this.state.fatherName}
                       placeholder="Enter father name..."
                       onChange={this.getFatherName}
                />
                <Date 
                      className='game'
                      value={this.state.DOB}
                      label="Date of birth:"  
                      onChange={this.getDate}
                />

                <Button 
                    value="Submit"
                    onClick={this.AddFamily}
                />
               
            </React.Fragment>
        );
    }
}

export default RashanCard;