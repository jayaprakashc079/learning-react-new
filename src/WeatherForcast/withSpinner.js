import React from 'react';
import Loader from './Components/Loader';

export const withSpinner = (component)=>{
    return(
        class WeatherCardwithSpinner extends component{

            constructor(props){
                super(props);
                this.state={
                    ...super.state, 
                    loading:false
                }
            }

            render(){
                return(this.state.loading?<Loader/>:super.render());
            }

        }
    );
}