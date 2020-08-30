import React from 'react';
import Table from './Components/Table';
import _, { keys } from 'lodash';
import SaveList from './SaveList';

class AllFamily extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            columns:[],
            data:[]
        }

        this.service = new SaveList();
    }

    componentDidMount=()=>{
        let familyList = this.service.getList('FamilyList');
         let columns = [{
                title: 'Name',
                field: 'Person'
            }, 
            {
                title: 'Father name', 
                field: 'FatherName' 
            },
            { 
                title: 'Date of birth', 
                field: 'DOB', 
                type: 'date' 
            }, 
            { 
                title: 'Gender',
                field: 'gender',
                lookup: { Male: 'Male', Female: 'Female' , Other:'Other'}
            },
            { 
                title: 'Is head', 
                field: 'isHead'
            }
          ] 
          let data = familyList.map((family) => {
            return _.values(family)
            
        })

         this.setState({
             columns:columns, 
             data:_.flattenDeep(data)
         })
    }
    
    render(){
        return(

            <Table columns={this.state.columns} data={this.state.data}/>
        );
    }
}

export default AllFamily;