import React from 'react';
import logo from './logo.svg';
import Tabs from './Tabs';
//import './App.css';
//import ShoppingList from './shoppingList';
//import Game from './Components/Game';
//import Game from './TicTocGame';
import TodoList from './TodoList/TodoList';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import TodoApp from './TodoApp/TodoApp';
import RashanCard from './RashanCard/RashanCard';
import ViewFamilies from './RashanCard/ViewFamilies';
import AllFamily from './RashanCard/AllFamily';
import EditFamily from './RashanCard/EditFamily';

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
       {/*<Router>
        <Route path="/" exact component={TodoList}></Route>
          <Route path="/:Tab" exact component={TodoList}></Route>
       </Router>*/} 
       {/*<Router>
         <Route path='/' exact component={TodoApp}></Route>
         <Route path="/:Tab" exact component={TodoApp}></Route>
       </Router>*/}
       <Router>
         <Route path='/Registration' exact component={RashanCard}/>
         <Route path='/ViewFamily' exact component={ViewFamilies}/>
         <Route path='/AllHouseholds' exact component={AllFamily}/>
         <Route path="/:id/EditFamily"  exact component={EditFamily}/>
       </Router>

      </header>
    </div>
  );
}

export default App;
