import React from 'react';
import './Style.css';

class CardBady extends React.Component{

    render(){
        return(

            <div className="cur-con-weather-card__panel details-container">
                    <div className="spaced-content detail">
                        <span className="label">Air Quality</span>
                        <span className="value">Fair</span>
                    </div>
                    <div className="spaced-content detail">
                        <span className="label">Wind</span>
                        <span className="value">W {this.props.wind} km/h</span>
                    </div>
                    <div className="spaced-content detail">
                        <span className="label">Wind Gusts</span>
                        <span className="value">{this.props.windGusts} km/h</span>
                    </div>
                
            </div>
                   
        );
    }
}

export default CardBady;