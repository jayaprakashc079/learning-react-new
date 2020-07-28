import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInput:'',
            list:[],
        
        }
    }
    changeInput(input){
        this.setState({
            userInput:input
        })
    }

    addToList(input, status){
        let listArray = this.state.list;
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
            userInput:''
        }, ()=> this.displayLog(this.state.list) );

    }

    displayLog(input){
        console.log(input);
    }

    render(){
        return(
                <div>
                    <input 
                        onChange={(e) => this.changeInput(e.target.value)}
                        placeholder = 'Type text'
                        value = {this.state.userInput}
                        type = "text"
                    />
                    <button onClick = {() => this.addToList(this.state.userInput, 'todo')}>Add</button>
                    <h2>Todo...</h2>
                    <ul>
                      {this.state.list.filter((val)=> val.status =='todo').map((val, index) =>
                                <li key={index}>
                                    {val.itemes}
                                    <button id={index} onClick={() =>this.updateList(val.id, 'completed')}>Completed</button>
                                </li>
                            )}
                    </ul>
                    <h2>Completed..</h2>
                    <ul>
                        {this.state.list.filter((val) => val.status == 'completed').map((val, index)=> 

                        <li key={index}>
                            {val.itemes}
                            <button onClick={()=>this.updateList(val.id, 'todo')}>Undo</button>
                        </li>
                        )}
                    </ul>
                
                </div>
            );
    }
}

export default TodoList;