import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/PeopleOutline";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/AccountCircle";
import _ from 'lodash';
import EditIcon from './Edit';

const useStyles = ({
  root: {
    width: "100%",
    maxWidth: 360,
  }
});

class NestList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Open:false
        }
    }

   handleClick = () => {
     let enable = this.state.Open;

       this.setState({
           Open:enable ? false:true
       })
   }

   render(){
     let familyList = this.props.config;
     const classes = this.props;  
    return ( 
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={this.handleClick} style={{backgroundColor:"#48d1cc"}}>
         <ListItemIcon>
           <InboxIcon />
         </ListItemIcon>
         <ListItemText style={{paddingTop:"7px"}} primary={familyList.head + " and family"} />
         {this.state.Open ? <ExpandLess /> : <ExpandMore />}
      </ListItem> 
      <EditIcon onClick={()=>this.props.editFamily(this.props.idx)}/>
      <Collapse in={this.state.Open} timeout="auto" unmountOnExit style={{backgroundColor:"lightblue"}}>
         <List component="div" disablePadding>
              <>
              {_.map(familyList.members.map((name)=>
              <>
                <ListItem button >
                    <ListItemIcon>
                      <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary={name}/>
                </ListItem>
              </>
              
              ))}
                
              </>
         </List>
      </Collapse> 
    </List>);
   }
}

export default NestList;
