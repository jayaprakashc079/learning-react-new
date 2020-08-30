import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage'
import _ from 'lodash';

class SaveList extends React.Component{

    setList=(key, obj)=>{
        if(!_.isEmpty(obj))
          reactLocalStorage.set(key, JSON.stringify(obj));
    }

    getList=(key)=>{
         let obj = reactLocalStorage.get(key);
         if(obj)
            return JSON.parse(obj);
    }
}

export default SaveList;