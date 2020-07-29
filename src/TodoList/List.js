import React from 'react';

class List extends React.Component{
    
    render(){
        const Button=this.props.buttonComponent;
        const buttonProps=this.props.buttonProps;
        return(
            <div>
                <ul>
                    {this.props.list.map((val , index) => 
                    <li key={index}>
                        {val.itemes}
                        {
                            Button &&
                            <Button
                                value={buttonProps.value}
                                onClick={() => buttonProps.onClick(val.id, buttonProps.update_type)}
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