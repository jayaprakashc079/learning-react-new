import React from 'react';
import TodoButton from './Button';
import TodoListInput from './Input';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[],
        
        }

        // this.changeInput = this.changeInput.bind(this);
    }
    changeInput = (input) => {
        this.setState({
            userInput:input
        })
    }

    addToList(input, status){
        let listArray = this.state.list;
        if(input === '')
            return ;
        listArray.push({id:listArray.length, itemes:input, status:status});

        this.setState(
            {list:listArray,
            userInput:''}
            );
    }
    updateList(id, status){
        let listUpdate = this.state.list;
        listUpdate[id].status = status;

        this.setState({
            list:listUpdate, 
            userInput:'',
        }, ()=> this.displayLog(this.state.list) );

    }

    displayLog(input){
        console.log(input);
    }

    render(){
        return(
                <div>
                    <TodoListInput onChange={this.changeInput} value={this.state.userInput}/>

                    <TodoButton value='Add' onClick= {() => this.addToList(this.state.userInput, 'todo')} />

                    <h2>Todo...</h2>
                    <ul>
                      {this.state.list.filter((val)=> val.status =='todo').map((val, index) =>
                                <li key={index}>
                                    {val.itemes}
                                    <TodoButton value='Completed' onClick={() =>this.updateList(val.id, 'completed')} />
                                </li>
                            )}
                    </ul>
                    <h2>Completed..</h2>
                    <ul>
                        {this.state.list.filter((val) => val.status == 'completed').map((val, index)=> 

                        <li key={index}>
                            {val.itemes}
                            <TodoButton value='Undo' onClick={() => this.updateList(val.id, 'todo')}/>
                        </li>
                        )}
                    </ul>
                
                </div>
            );
    }
}

export default TodoList;