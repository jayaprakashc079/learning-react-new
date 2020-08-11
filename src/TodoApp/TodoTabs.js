import React from 'react';
import './Style.css';
import _ from 'lodash'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
  
  const Styles = {
    root: {
      flexGrow: 1,
    },
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
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