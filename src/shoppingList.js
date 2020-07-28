import React from 'react';


class shoppingList extends React.Component {
    render(){
        return (
           
             <div className = "shopping-list">
             <h1>Shopping list for {this.props.name}</h1>
             <ul>
                 <li>WhatsApp</li>
                 <li>Instagram</li>
                 <li>Facebook</li>
             </ul>
             </div>
        );
    }

}

export default shoppingList