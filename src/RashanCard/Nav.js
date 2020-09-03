import React from 'react';
import './Styles.css'
import  {Link} from 'react-router-dom'

class Nav extends React.Component{


    render(){
       

        return(
            <div className={{padding:"10px"}}>
                <nav>
                    <Link to="/"> 
                        <h2 className="linkStyle">Rashan card app</h2>
                    </Link>
                        <ul className="nav-links">
                            <Link to="/Registration">
                                <li className="linkStyle">Register family</li>
                            </Link>
                            <Link to="/ViewFamily">
                                <li className="linkStyle">View families</li>
                            </Link>
                            <Link to="/AllHouseholds">
                                <li className="linkStyle">View households details</li>
                            </Link>
                        </ul>
                </nav>

            </div>
            
        );
    }
}

export default Nav;