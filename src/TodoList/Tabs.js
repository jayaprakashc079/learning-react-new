import React from 'react';


class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab: this.props.initTab
        }
    }
    changeState(value){
        this.setState({
            selectedTab:value
        })
    }
    
    componentWillReceiveProps =(nextprops)=>{
        this.setState({selectedTab:nextprops.initTab})
    }
    render(){
        const config = [{
            'name': 'Tab1',
            'content': <div>Tab 1 content</div>
        }, {
            name: "tab 2",
            content: <div>Tab content 2</div>
        }]
        return(
            <div>
               {
                this.props.config.map((value) => (
                    <>
                        <div onClick={()=>this.changeState(value.name)}> 
                            {value.name} 
                        </div>
                        {this.state.selectedTab == value.name &&
                            <div>
                                {value.content}
                            </div>
                        }
                    </>
                ))
                }
            </div>
        );
    }
}

export default Tabs;