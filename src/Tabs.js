import React from 'react';

class Tabs extends React.Component{
constructor(props){
    super(props);
    this.state={
        savedTab:""
    }
}
changeState(value){
    this.setState({savedTab:value});
}

componentDidMount=()=>{
    this.setState({savedTab:'TAB2'});
}
    render(){
        const config=[
            {name:"TAB1", 
            content:<div>Tab1 content</div>}, 
            {name:"TAB2", 
            content:<div>Tab2 content</div>}, 
    ]
        return (
        config.map((value) => 
        <React.Fragment key={value.name}>
        <div onClick={()=>this.changeState(value.name)}>{value.name}</div>
        {this.state.savedTab == value.name && <div>{value.content}</div>}
        </React.Fragment> 
        )
        );
    }
}
export default Tabs;