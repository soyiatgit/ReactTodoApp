import React from 'react';
import * as TodoActions from './Actions';


class Todo extends React.Component{
	constructor(props){
		super();
		this.state = {
						updatable : false,
						name : props.name,
						status : props.status,
						id: props.id,
						editText : 'Edit'
					};
	}
	
	deleteTodo(){
		TodoActions.deleteTodo(this.props.id);
	}
	
	updateTodo(){
		if(this.state.editText === "Edit")
			this.setState({updatable : true, editText : 'Update'});
		else if (this.state.editText === "Update"){
			this.setState({updatable : false, editText : 'Edit'});
			TodoActions.updateTodo(this.state);
		}
	}
	
	onTodoChange(e){
		if(e.target.id.includes("Name"))
			this.setState({name: e.target.value});
		else if(e.target.id.includes("Status"))
			this.setState({status : e.target.value});		
	}
    
    render(){
				return(
					<div className="todo">
                        <div className="inline todo-margin todo-width"> 
							<div className={this.state.updatable?'hide-todo' : 'passive-todo'}>{this.props.name} - {this.props.status}</div>
							<div className={this.state.updatable?'active-todo' : 'hide-todo'}>
								<input className="form-control" type="text" value={this.state.name} id={'todoName' + this.props.id} onChange={this.onTodoChange.bind(this)}/>
								<input className="form-control" type="text" value={this.state.status} id={'todoStatus' + this.props.id} onChange={this.onTodoChange.bind(this)}/>
							</div>
						</div>
						<div className="inline todo-margin"><button className="btn btn-primary btn-todo" onClick={this.updateTodo.bind(this)}>{this.state.editText}</button></div>
						<div className="inline todo-margin "><button className="btn btn-danger btn-todo" onClick={this.deleteTodo.bind(this)}>Delete</button></div>
					</div>
			);
	}
}


export default Todo;

