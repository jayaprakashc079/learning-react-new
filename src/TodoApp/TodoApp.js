import React from 'react';
import Input from './Input';
import List from './SpacingGrid';
import Tabs from './TodoTabs';
import SaveList from './SaveList';
import _ from 'lodash';
import Form from './Form';
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            list:[],
            savedTab:'',
            Open:false,
            msg:'',
            objToUpdate:'',
            currentIndex:'',
            enableUndo:false
        }

        this.service = new SaveList();
    }

    updateList =(id, updateType) =>{
        let listArray = this.state.list;
        listArray[id].status =updateType;

        this.setState({
            list:listArray,
            Open:true,
            operation:updateType,
            currentIndex:id,
            msg:'Task moved to '+ updateType +' list',
            enableUndo:true
        }, this.service.setList('Todos', this.state.list))

    }

    changeTab=(newTab)=>{
        this.setState({
             savedTab:newTab
        })
        this.props.history.push(`/${newTab}`);
    }

    componentDidMount =()=> {
        let  savedTodos = this.service.getList('Todos');
        
        this.setState({
            savedTab:this.props.match.params.Tab?this.props.match.params.Tab:'Todo',
            list:savedTodos?savedTodos:[]
        })
    }

    submit=(model)=>{

        let listArray = this.state.list;
        let list = _.concat(listArray, {
            ...{id:listArray.length}, 
            ...model, 
            ...{status:'Todo'}});

            this.setState({
                list:list,
                Open:true, 
                currentIndex:listArray.length,
                msg:'Task moved to Todo list', 
                enableUndo:false
            }, this.service.setList('Todos', list))

    }

    handleClose = () => {
        this.setState({
            Open:false
        })
      };
    
      closeSnikBar=()=>{
          setTimeout(this.handleClose, 1000);
      }
      
    render(){
        const TodoContent =  <List 
                                list={_.filter(this.state.list,(val)=>val.status=='Todo')}
                                btnName='Completed'
                                btnClick={this.updateList}
                                updateType='Completed'
                                btnDelName='Delete'
                                btnDelClick={this.updateList}
                                updateDelType='Deleted'
                            />
        const CompletedContent= <List 
                                    list={_.filter(this.state.list,(val)=>val.status=='Completed')}
                                    btnName='Undo'
                                    btnClick={this.updateList}
                                    updateType='Todo'
                                    btnDelName='Delete'
                                    btnDelClick={this.updateList}
                                    updateDelType='Deleted'
                                />
        const config =[{
                        name:'Todo', 
                        content:TodoContent
                       }, 
                       {
                           name:'Completed',
                           content:CompletedContent
                       }
                      ];
        
        return(
            <>
                <Form
                    submit={this.submit}
                    btnText='Add'
                >
                    <Input
                        name='value'
                        validationError="Required value" 
                        label="Todo task.." 
                        required
                    />
                </Form>
                <Tabs 
                    config={config}
                    onClick={this.changeTab}
                    initTab={this.state.savedTab}
                />

                <Snackbar
                    anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                    }}
                    open={this.state.Open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={this.state.msg}
                    action={
                    <React.Fragment>


                        {
                        this.state.enableUndo && 
                        <Button 
                            color="secondary" 
                            size="small" 
                            onClick={()=>this.updateList(this.state.currentIndex, this.state.savedTab)}>
                        UNDO
                        </Button>}
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={this.handleClose}
                            >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                    }
                />
            </>

        );
    }
}

export default TodoApp;