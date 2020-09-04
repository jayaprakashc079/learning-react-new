import React from 'react';
import { toInteger } from 'lodash';
import moment from 'moment';
import Input from '../RashanCard/Components/Input';
import Form from '../RashanCard/Components/Form';
import WeatherCard from './Components/WeatherCard';
import {withSpinner} from './withSpinner';


class CurrentWeatherCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTemp:'',
            realFeel:'',
            windGusts:'',
            wind:'',
            location:'',
            time:'',
        }
    }
  
    componentDidMount = async () => {
       
        let uri = 'https://api.openweathermap.org/data/2.5/weather?zip=560095,in&APPID=97644745d2e4ebcfe6c4af13e312a488&units=metric';
        
            const response = await fetch(uri);
          try {
            const data = await response.json();
            this.setState({currentTemp:Math.round(data.main.temp), 
                           realFeel:toInteger(data.main.feels_like),
                           windGusts:'7.5',
                           wind:toInteger(data.wind.speed),
                           location:data.name,
                           time:moment().format('lll'), 
                           loading:false
                        }, console.log(data))
          } catch (e) {
              console.log(e);
          }
          
    }

    submit= async (model)=>{
    
        this.setState({
            loading:true
        });

        let uri = 'https://api.openweathermap.org/data/2.5/weather?zip=560095,in&APPID=97644745d2e4ebcfe6c4af13e312a488&units=metric';
        if (model.input)
             uri = 'https://api.openweathermap.org/data/2.5/weather?zip='+model.input+',in&APPID=97644745d2e4ebcfe6c4af13e312a488&units=metric';
        
            const response = await fetch(uri);
          try {
            const data = await response.json();
            this.setState({currentTemp:Math.round(data.main.temp), 
                           realFeel:toInteger(data.main.feels_like),
                           windGusts:'7.5',
                           wind:toInteger(data.wind.speed),
                           location:data.name,
                           time:moment().format('lll'), 
                           loading:false
                        }, console.log(data))
          } catch (e) {
              console.log(e);
          }

    }

    render(){
        
        return(
            <>
            <Form
                submit={this.submit}
                btnText='Submit'
            >
                <Input
                    name="input"
                    validationError="Required value" 
                    label="Enter zip code" 
                    type='text' 
                    required
                />
            </Form>
            <WeatherCard
                time={this.state.time}  
                realFeel={this.state.realFeel} 
                currentTemp={this.state.currentTemp}
                wind={this.state.wind} 
                windGusts={this.state.windGusts}
                location={this.state.location}
            />
          </>
        );
    }
}

export default withSpinner(CurrentWeatherCard)