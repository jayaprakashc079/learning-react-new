import React from 'react';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import './Style.css';

class WeatherCard extends React.Component{

    render(){
        
        return(
            <div className="content-module">
                <div className="cur-con-weather-card"> 
                <CardHeader time={this.props.time}  realFeel={this.props.realFeel} currentTemp={this.props.currentTemp}>
                    <CardBody wind={this.props.wind} windGusts={this.props.windGusts}/>
                </CardHeader>
                <CardFooter location={this.props.location}/>
                </div>
            </div>
        );
    }
}

export default WeatherCard