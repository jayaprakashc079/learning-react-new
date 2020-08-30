import React from 'react'
import Form from './Components/Form'
import NewPerson from './Components/NewPerson';
import _ from 'lodash'
import AddIcon from './Components/AddIcon';
import SaveList from './SaveList';
import Container from './Components/Container'

class RashanCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addPerson:[],
            saveFamily:[],

        }

        this.service = new SaveList();

    }

    componentDidMount =()=> {
        let getPer = this.state.addPerson;
        let setPer = _.concat(getPer, 
                              <NewPerson 
                                    id={getPer.length}
                                    key={getPer.length} 
                                    enable={true} />)
        let savedFamily = this.service.getList('FamilyList');

        this.setState({
            addPerson:setPer,
            saveFamily:savedFamily? savedFamily:[]
        })
    }

    scrolTo =()=>{
        window.scrollBy(0, 350)
    }

    submit=(model)=>{
        let getFamily = this.state.saveFamily;
       
        let setFamily = _.concat(getFamily, model);

        console.log(setFamily);
        let getPer = [];
        let setPer = _.concat(getPer, <NewPerson
                                            enable={true}/>)
        this.setState({
            addPerson:setPer, 
        }, this.service.setList("FamilyList", setFamily))

    }

    addNewPerson=()=>{
        
        let getPer = this.state.addPerson;
        let setPer = [...getPer, <NewPerson id={getPer.length} key={getPer.length} enable={false}/>]
        this.setState({
            addPerson: setPer
        }, console.log(setPer.length))
        
    }

    componentDidUpdate=()=>{

        this.scrolTo();
    }

    

    render(){

        return(
                <Container>
                <Form 
                        submit={this.submit}
                        btnText='Submit'
                     >
                        <h2>Family registration form</h2>
                        {this.state.addPerson}
                        <AddIcon onClick={this.addNewPerson}/>
                        
                     </Form>
                     
                 </Container>
            
        );

    }
}

export default RashanCard;