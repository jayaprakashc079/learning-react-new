import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from './ButtonTodo';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };


class TodoCard extends React.Component{

    render(){
        const { classes } = this.props;
       
        return(
            <>
                    <Card key={this.props.id} className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Task of the Day
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {this.props.value}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    size="small"
                                    onClick={()=>this.props.btnClick(this.props.id,this.props.updateType)}
                                    value={this.props.btnName}
                               />
                               <Button 
                                    size="small"
                                    onClick={()=>this.props.btnDelClick(this.props.id,this.props.updateDelType)}
                                    value={this.props.btnDelName}
                               />
                            </CardActions>
                        </Card>  
            </>
        );
    }
}

export default withStyles(styles)(TodoCard);