import React from 'react';
import './Style.css';

class List extends React.Component{
    
    render(){
        const Button=this.props.buttonComponent;
        const buttonProps=this.props.buttonProps;
        return(
            <div>
                <ul>
                    {this.props.list.map((val , index) => 
                    <li key={index} className='tab'>
                        {val.itemes}
                        {
                            Button &&
                            <Button
                                value={buttonProps.value}
                                onClick={() => buttonProps.onClick(val.id, val.status, buttonProps.update_type)}
                            />
                        }               
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default List;