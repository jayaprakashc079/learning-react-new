import React from 'react';
import SavedList from './SaveList';
import _ from 'lodash';
import Form from './Components/Form';
import AddIcon from './Components/AddIcon';
import Container from './Components/Container'
import NewPerson from './Components/NewPerson';

class EditFamily extends React.Component{
    constructor(props){
        super(props);
        this.state={
            setList:[], 
            editFamily:[],
            savedFamilies:[],
            saveFamily:[]
        }
        this.service = new SavedList();
    }

    scrolTo =()=>{
        window.scrollBy(0, 350)
    }

    submit=(model)=>{
        let setFamily = this.state.savedFamilies;
        setFamily[this.props.match.params.id] = model;
        console.log(setFamily);
        this.service.setList("FamilyList", setFamily)
        this.props.history.push(`/ViewFamily`);
    }

    addNewPerson=()=>{
        
        let getPer = this.state.editFamily;
        let setPer = [...getPer, <NewPerson id={getPer.length} key={getPer.length} enable={false}/>]
        this.setState({
            editFamily: setPer
        })
        
    }

    componentDidUpdate=()=>{

        this.scrolTo();
    }
    
    componentDidMount = () =>{
        let savedFamilies = this.service.getList("FamilyList");
       
        let familyList = _.filter(savedFamilies, (val, idx) => idx ==this.props.match.params.id )
         console.log(_.flattenDeep(familyList));
        let editFamily = [];
        _.map(familyList, (members, idxs) =>
        {
            editFamily = _.map(_.values(members), (member, idx)=>
            
            <NewPerson 
                id={idx} 
                key={idx} 
                enable={member.isHead?true:false} 
                defaultPerson={member.Person}
                defaultFather={member.FatherName}
                defaultDOB={member.DOB}
                defaultGender={member.gender}
                defaultHead={member.isHead?true:false}
            />
            )
        }
        )
        
        this.setState({
            savedFamilies:savedFamilies,
            setList:familyList,
            editFamily:editFamily
        }) 
 
    }

    render(){
                
        return(
        
        <div>
          <Container>
                <Form 
                        submit={this.submit}
                        btnText='Submit'
                     >
                        <h2>Edit family details</h2>
                        {this.state.editFamily}
                        <AddIcon onClick={this.addNewPerson}/>
                        
                     </Form>
                     
                 </Container>
        </div>
        );
    }
}

export default EditFamily;