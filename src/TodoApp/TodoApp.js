import React from 'react';
import Input from './Input';
import Button from './Button';
import List from './List';
import Tabs from './Tabs';
import SaveList from './SaveList';
import _ from 'lodash';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            list:[],
            savedTab:'',
        }

        this.service = new SaveList();
    }

    getUserInput=(inputVal)=>{
        this.setState({
            userInput:inputVal,
        })
    }

    AddList =()=>{
        let listArray= this.state.list;
        _.concat(listArray, {
            Id:listArray.length,
            value:this.state.userInput,
            status:'Todo'
        })
        
        this.setState({
            list:listArray
        }, this.service.setList('Todos', this.state.list))

        this.getUserInput('');
    }

    updateList =(id,status, updat)=>{                                                                                                            eType)=>{
        let listArray = this.state.list;
        listArray[id].status =updateType;
        this.setState({
            list:listArray,
        }, this.service.setList('Todos', this.state.list));

    }

    changeTab=(newTab)=>{
        this.setState({
             savedTab:newTab
        })
        this.props.history.push(`/${newTab}`);
    }

    componentDidMount =()=> {
        let  savedTodos = this.service.getList('Todos');
        
        this.setState({
            savedTab:this.props.match.params.Tab?this.props.match.params.Tab:'Todo',
            list:savedTodos?savedTodos:[]
        }, console.log(this.props))
    }
    render(){
        const TodoContent =  <List 
                                list={_.filter(this.state.list,(val)=>val.status=='Todo')}
                                btnName='Completed'
                                btnClick={this.updateList}
                                updateType='Completed'
                            />
        const CompletedContent= <List 
                                    list={_.filter(this.state.list,(val)=>val.status=='Completed')}
                                    btnName='Undo'
                                    btnClick={this.updateList}
                                    updateType='Todo'
                                />
        const config =[{
                        name:'Todo', 
                        content:TodoContent
                       }, 
                       {
                           name:'Completed',
                           content:CompletedContent
                       }
                      ];
        return(
            <>
                <Input 
                    label=''
                    value={this.state.userInput} 
                    onChange={this.getUserInput}
                />
                <Button 
                    onClick={()=>this.AddList()}
                    value='Add'
                />
                <Tabs 
                    config={config}
                    onClick={this.changeTab}
                    initTab={this.state.savedTab}
                />
            </>

        );
    }
}

export default TodoApp;