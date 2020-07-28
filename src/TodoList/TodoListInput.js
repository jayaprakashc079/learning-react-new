import React from 'react';

class TodoListInput extends React.Component{
    clickMe(){
        return alert('click me');
    };
    render(){
        return(<div>
            <input id ='inputText' onChange={(e)=>} placeholder ="Enter text" color ='#FF00FF'></input>
            <button id='btnText' onClick= {this.props.onClickFn()}>Add</button>
        </div>);
        
    }
}

export default TodoListInput;