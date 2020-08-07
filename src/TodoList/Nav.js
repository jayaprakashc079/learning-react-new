import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css'

class Nav extends React.Component{
  
    render(){
        return(
            <nav className="tab">
                <ul className='nav-links'>
                    <Link to='/todo'>
                        <li>Todo</li>
                    </Link>
                    <Link to='completed'>
                        <li>Completed</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;