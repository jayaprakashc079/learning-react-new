import React from 'react';
import './Style.css';

class CardFooter extends React.Component{

    render(){
        return(
            <div className="cur-con-footer">
                <span className="phrase">{this.props.location}</span>
                <span className="cur-con-weather-card__cta">
                    <span className="text">More Details</span>
                    <img className="icon-arrow" src={require("./Images/arrow-right-black.svg")} alt="" width="18" height="18" />
                </span>
            </div>

        );
    }
}

export default CardFooter