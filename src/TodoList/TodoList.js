import React from 'react';
import TodoButton from './Button';
import TodoListInput from './Input';
import ListwithHeader from './ListwithHeader';
import SaveList from './SaveList';
import './Style.css'
import Tab from './Tabs';
import { BrowserRouter, Router } from 'react-router-dom';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[],
            savedState:''
        }
     this.service = new SaveList();   
    }

    changeInput = (input) => {
        this.setState({
            userInput:input,
        })
    }

    addToList =  () => {
        
        const input = this.state.userInput;
        const status = 'Todo';
        let listArray = this.state.list;
        if(input === '')
            return ;
        listArray.push({id:listArray.length, itemes:input, status:status});

         this.setState({
             list:listArray,
            }, 
             ()=> this.service.setList("todos", this.state.list)
             );
        
        
        this.changeInput('');
    }
    updateList =  (id, tab, status) => {
        let listUpdate = this.state.list;
        listUpdate[id].status = status;

         this.setState({
                        list:listUpdate,
                        savedState:tab
        }, 
            () => this.service.setList("todos", this.state.list));
        
        this.changeInput('');
    }
    componentDidMount = () => {
        console.log(this.props)
        const savedTodos = this.service.getList('todos');
            this.setState({savedState:this.props.match.params.Tab, list:savedTodos || []})
    }
 
    changeTab=(tabName)=>{
        this.props.history.push(`/${tabName}`)
    }


    render(){
        const listTodo = this.state.list.filter((val)=> val.status =='Todo');
        const listCompleted = this.state.list.filter((val)=> val.status =='Completed');
        const buttonPropsTodo = {value: 'Completed', onClick: this.updateList, update_type:'Completed'};
        const buttonPropsCompleted = {value: 'Undo', onClick: this.updateList, update_type:'Todo'};
        
        return(
                <div>
                    <TodoListInput onChange={this.changeInput} value={this.state.userInput} />
                    <TodoButton value='Add' onClick={this.addToList} />

                   { <Tab 
                        config={[{
                            name: "Todo",
                            content: (<ListwithHeader 
                                    list={listTodo}
                                    buttonComponent={TodoButton}
                                    buttonProps={buttonPropsTodo}
                                />)
                        }, {
                            name: "Completed", 
                            content:( <ListwithHeader 
                                list={listCompleted}
                                buttonComponent={TodoButton}
                                buttonProps={buttonPropsCompleted}
                            />                             )
                        }]}
                        initTab={this.state.savedState}
                        onClick={this.changeTab}
                    />}

                </div>
            );
    }
}



export default TodoList;