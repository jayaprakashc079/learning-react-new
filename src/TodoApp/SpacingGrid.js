import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TodoCard from './TodoCard';

const Styles = {
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: 2
    }
  }

  class SpacingGrid extends React.Component{
   
  
    render(){

      const classes=this.props;

      return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={2}>
              {this.props.list.map((value, id) => (
                <Grid key={id} item>
                  <Paper className={classes.paper}>

                  <TodoCard id={value.id} 
                          value={value.value}
                          btnClick={this.props.btnClick}
                          btnName={this.props.btnName}
                          updateType={this.props.updateType}
                />  
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }

  export default withStyles(Styles)(SpacingGrid);
  
  