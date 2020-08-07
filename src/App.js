import React from 'react';
import logo from './logo.svg';
import Tabs from './Tabs';
import RashanCard from './RashanCard';
//import './App.css';
//import ShoppingList from './shoppingList';
//import Game from './Components/Game';
//import Game from './TicTocGame';
import TodoList from './TodoList/TodoList';
import {BrowserRouter as Router, Route}  from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <ShoppingList name= "JP"/> 
        <RashanCard/>
        
        <Tabs></Tabs>
        */}
        <Router>
          <Route path="/:Tab" exact component={TodoList}></Route>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
