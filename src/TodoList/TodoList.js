import React from 'react';
import TodoButton from './Button';
import TodoListInput from './Input';
import ListwithHeader from './ListwithHeader';
import SaveList from './SaveList';
import './Style.css'
import Tab from './Tabs';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[],
            todoContent:[],
            config:[],
            savedState:''
        }
     this.service = new SaveList();   
    }

    changeInput = (input) => {
        this.setState({
            userInput:input
        })
    }

    addToList =  () => {
        
        const input = this.state.userInput;
        const status = 'todo';
        let listArray = this.state.list;
        if(input === '')
            return ;
        listArray.push({id:listArray.length, itemes:input, status:status});

         this.setState({
             list:listArray}, 
             ()=> this.service.setList("todos", this.state.list)
             );
        
        
        this.changeInput('');
    }
    updateList =  (id, status) => {
        let listUpdate = this.state.list;
        listUpdate[id].status = status;

         this.setState(
             {list:listUpdate}, 
            () => this.service.setList("todos", this.state.list));
        
        this.changeInput('');
    }
    componentDidMount = () => {
        const savedTodos = this.service.getList('todos');
            this.setState({savedState:'TODO', list:savedTodos || []})
    }
 
    render(){
        const listTodo = this.state.list.filter((val)=> val.status =='todo');
        const listCompleted = this.state.list.filter((val)=> val.status =='completed');
        const buttonPropsTodo = {value: 'Completed', onClick: this.updateList, update_type:'completed'};
        const buttonPropsCompleted = {value: 'Undo', onClick: this.updateList, update_type:'todo'};

        return(
                <div>
                    <TodoListInput onChange={this.changeInput} value={this.state.userInput} />
                    <TodoButton value='Add' onClick={this.addToList} />

                    <Tab 
                        config={[{
                            name: "TODO",
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
                    />
                </div>
            );
    }
}

export default TodoList;