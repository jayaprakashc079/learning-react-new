import React from 'react';
import './Style.css';

class CardHeader extends React.Component{

    render(){
        return(
                <div className="cur-con-weather-card__body"> 
                    <div className="cur-con-weather-card__panel">
                        <h2 className="cur-con-weather-card__title">
                            Current Weather
                        </h2>
                        <p className="cur-con-weather-card__subtitle">
                            {this.props.time}
                        </p>
                        <div className="forecast-container">
                            <img className="weather-icon" src={require("./Images/Weather.png")} width="88" height="88"/>
                            <div className="temp-container">
                                <div className="temp">{this.props.currentTemp}°<span className="after-temp">C</span></div>
                                <div className="real-feel">
                                    RealFeel® {this.props.realFeel}°
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.children}
                </div>
                   
        );
    }
}

export default CardHeader;