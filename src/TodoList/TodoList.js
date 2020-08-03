import React from 'react';
import TodoButton from './Button';
import TodoListInput from './Input';
import ListwithHeader from './ListwithHeader';
import SaveList from './SaveList';
import './Style.css'

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[],
            todoContent:[],
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
            this.setState({list:savedTodos || []})
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
                    <div className="tab">
                        <div className="tabTodo"> 
                        <ListwithHeader 
                            headerVal='Todo...'
                            list={listTodo}
                            buttonComponent={TodoButton}
                            buttonProps={buttonPropsTodo}
                        />
                        </div>
                        <div className="tabTodo"> 
                        <ListwithHeader 
                            headerVal='Completed...'
                            list={listCompleted}
                            buttonComponent={TodoButton}
                            buttonProps={buttonPropsCompleted}
                        /> 
                        </div>
                       
                        
                    </div>

                </div>
            );
    }
}

export default TodoList;