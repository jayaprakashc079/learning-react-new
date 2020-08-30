import React from 'react';
import SaveList from './SaveList';
import _ from 'lodash';
import List from './Components/List';

class ViewFamilies extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            FamilyList:[]
        }
        this.service = new SaveList();
    }

    componentDidMount=()=>{
        let familyList = this.service.getList('FamilyList');
        let displayFamily = familyList.map((family, idx) => {
            var family = _.values(family);
            var head = family.find(member => member.isHead);
            var headMember = head.Person;
            return {
               head: headMember,
                members: family.filter(member => member.isHead != true).map(member => member.Person)
            }
        })
         this.setState({
             FamilyList:displayFamily
         })
    }

    editFamily =(idx)=>{
        console.log("Edit family called ");
        this.props.history.push(`/${idx}/EditFamily`);
    }

    render(){

        return(
            <>
                <h2>Family details</h2>
                 <List
                    config={this.state.FamilyList}
                    editFamily={this.editFamily}
                 />
            </>
        );
    }
}

export default ViewFamilies;