import React from 'react';
import TodoButton from './Button';
import TodoListInput from './Input';
import List from './List';
import ListWithHeader from './ListwithHeader';
import ListwithHeader from './ListwithHeader';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[],
        
        }
    }

    changeInput = (input) => {
        this.setState({
            userInput:input
        })
    }

    addToList = () => {
        const input = this.state.userInput;
        const status = 'todo';
        let listArray = this.state.list;
        if(input === '')
            return ;
        listArray.push({id:listArray.length, itemes:input, status:status});

        this.setState({list:listArray});
        this.changeInput('');
    }
    updateList = (id, status) => {
        let listUpdate = this.state.list;
        listUpdate[id].status = status;

        this.setState({
            list:listUpdate
        });
        this.changeInput('');
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

                    <ListwithHeader 
                        headerVal='Todo...'
                        list={listTodo}
                        buttonComponent={TodoButton}
                        buttonProps={buttonPropsTodo}
                    />

                    <ListwithHeader 
                        headerVal='Completed...'
                        list={listCompleted}
                        buttonComponent={TodoButton}
                        buttonProps={buttonPropsCompleted}
                    />

                </div>
            );
    }
}

export default TodoList;