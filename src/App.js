import React from 'react';
import logo from './logo.svg';
//import './App.css';
//import ShoppingList from './shoppingList';
//import Game from './Components/Game';
//import Game from './TicTocGame';
import TodoList from './TodoList/TodoList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <ShoppingList name= "JP"/> */}
        
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
