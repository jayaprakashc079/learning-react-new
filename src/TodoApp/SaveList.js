import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage'

class SaveList extends React.Component{

    setList=(key, obj)=>{
          reactLocalStorage.set(key, JSON.stringify(obj));
    }

    getList=(key)=>{
         let obj = reactLocalStorage.get(key);
         if(obj)
            return JSON.parse(obj);
    }
}

export default SaveList;