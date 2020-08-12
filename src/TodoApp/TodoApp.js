import React from 'react';
import Input from './Input';
import List from './SpacingGrid';
import Tabs from './TodoTabs';
import SaveList from './SaveList';
import _ from 'lodash';
import Form from './Form';



class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            list:[],
            savedTab:'',
        }

        this.service = new SaveList();
    }

    updateList =(id, updateType) =>{
        let listArray = this.state.list;
        listArray[id].status =updateType;

        this.setState({
            list:listArray
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
        }, console.log(this.props))
    }

    submit=(model)=>{

        let listArray = this.state.list;
        let list = _.concat(listArray, {
            ...{id:listArray.length}, 
            ...model, 
            ...{status:'Todo'}});

            this.setState({
                list:list
            }, this.service.setList('Todos', list))

    }
    render(){
        const TodoContent =  <List 
                                list={_.filter(this.state.list,(val)=>val.status=='Todo')}
                                btnName='Completed'
                                btnClick={this.updateList}
                                updateType='Completed'
                            />
        const CompletedContent= <List 
                                    list={_.filter(this.state.list,(val)=>val.status=='Completed')}
                                    btnName='Undo'
                                    btnClick={this.updateList}
                                    updateType='Todo'
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
            </>

        );
    }
}

export default TodoApp;