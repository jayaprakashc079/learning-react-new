import React from 'react';
import './Style.css';
import _ from 'lodash'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
  
  const Styles = them => ({
     root:{
        // flexGrow: 1,
         //backgroundColor:them.palette.background.paper,
     }
  });

class TodoTabs extends React.Component{
    render(){
        const TabList = _.map(this.props.config, 'name');
        const { classes } = this.props;

        return(
            <>
                <div className={classes.root}>
                    <AppBar position="static">
                    <Tabs aria-label="simple tabs example">
                        {_.map(TabList, (val, id) => 
                            <Tab label={val} key={id} onClick={()=>this.props.onClick(val)} />
                            
                        )}
                    </Tabs>    
                    </AppBar>
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

export default withStyles(Styles)(TodoTabs);