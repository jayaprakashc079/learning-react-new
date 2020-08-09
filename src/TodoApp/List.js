import React from 'react';
import Button from './Button';

class List extends React.Component{

    render(){
        return(
            <div>
                <ul>
                {this.props.list.map((val, Id)=> 
                <li key={Id}> 
                    {val.value}
                    <Button 
                        onClick={()=>this.props.btnClick(val.Id, val.status, this.props.updateType)}
                        value={this.props.btnName}
                    />
                </li>
                )}
                
                </ul>
            </div>
        );
    }
}

export default List;