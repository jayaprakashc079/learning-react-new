import React from 'react';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardBody from './CardBody';
import './Style.css';
import { toInteger } from 'lodash';
import moment from 'moment';

class WeatherCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTemp:'',
            realFeel:'',
            windGusts:'',
            wind:'',
            location:'',
            time:''
        }
    }
  
    componentDidMount = async () => {
        
        let uri = 'https://api.openweathermap.org/data/2.5/weather?zip=560092,in&APPID=97644745d2e4ebcfe6c4af13e312a488&units=metric';
        if (this.props.match.params.id)
             uri = 'https://api.openweathermap.org/data/2.5/weather?zip='+this.props.match.params.id+',in&APPID=97644745d2e4ebcfe6c4af13e312a488&units=metric';
        
            const response = await fetch(uri, {
            
          });
          try {
            const data = await response.json();
            this.setState({currentTemp:Math.round(data.main.temp), 
                           realFeel:toInteger(data.main.feels_like),
                           windGusts:'7.5',
                           wind:toInteger(data.wind.speed),
                           location:data.name,
                           time:moment().format('lll')
                        }, console.log(data))
          } catch (e) {
              console.log(e);
          }
          console.log(this.props.match.params.id)
          
    }

    render(){
        
        return(
            <div className="content-module">
                <div className="cur-con-weather-card">
                <CardHeader time={this.state.time}  realFeel={this.state.realFeel} currentTemp={this.state.currentTemp}>
                    <CardBody wind={this.state.wind} windGusts={this.state.windGusts}/>
                </CardHeader>
                <CardFooter location={this.state.location}/>
                </div>
            </div>
        );
    }
}

export default WeatherCard