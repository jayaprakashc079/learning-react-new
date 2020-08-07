import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab: ''
        }
    }
    changeState(value){
        this.setState({
            selectedTab:value
        });
        this.props.onClick(value);

    }
    
    componentWillReceiveProps =(nextprops)=>{
        if(nextprops.initTab !=this.props.initTab)
            this.setState({selectedTab:nextprops.initTab})
    }
    getColorName =(val)=>{
        if(this.state.selectedTab == val)
            return "selected"
    }

    render(){
        const config = [{
            'name': 'Tab1',
            'content': <div>Tab 1 content</div>
        }, {
            name: "tab 2",
            content: <div>Tab content 2</div>
        }]
        
        const tabsList = this.props.config.map((val) => { return val.name

         })
        return(
            <div >
               
               <div className="tab">
                   {
                
                tabsList.map((val) =>
                ( <div
                    className={this.state.selectedTab == val ? "tab-item selected":"tab-item notSelected"} 
                    onClick={()=>this.changeState(val)}
                  > 
                    {val} 
                  </div>
                ))
               }
            </div>
               {
                this.props.config.map((value) => (
                    <React.Fragment key={value.name}>
                       
                        {this.state.selectedTab == value.name &&
                            <div>
                                {value.content}
                            </div>
                        }
                    </React.Fragment>
                ))
                }
            </div>
        );
    }
}

export default Tabs;