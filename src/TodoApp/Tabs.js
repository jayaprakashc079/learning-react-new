import React from 'react';
import './Style.css';
import _ from 'lodash'

class Tabs extends React.Component{


    render(){
        const TabList = _.map(this.props.config, 'name');
        return(
            <>
                <div className='tab'>
                    {_.map(TabList, (val) => 
                    <div 
                        className= {this.props.initTab == val &&'tab-items'} 
                        onClick={()=>this.props.onClick(val)}
                    >
                        {val}
                    </div>

                    )}
                </div>
                {
                     _.map(this.props.config,(val)=>
                     this.props.initTab == val.name   &&  <di>{val.content}</di>
                    )
                }
            </>
            );
    }
}

export default Tabs;