import React from 'react';
import {reactLocalStorage} from 'reactjs-localstorage'

class SaveList extends React.Component{

    getList = (keyname) => {
        const obj = reactLocalStorage.get(keyname);
        if (obj){
            return JSON.parse(obj);
        }
    }

    setList = (keyname, value) =>reactLocalStorage.set(keyname, JSON.stringify(value));
}

export default SaveList;