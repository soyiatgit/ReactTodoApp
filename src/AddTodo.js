import React from 'react';
import * as TodoActions from './Actions';


class AddPanel extends React.Component{
	constructor(props){
		super();
		this.state = {};
	}
	
	
	
	addTodo(){
			document.getElementById("todo-input-div").style.display = 'block';
			document.getElementById("todo-add-button").style.display = 'none';
	}
	
	removeError(){
		const name = document.getElementById("todo-input-box").value;
		if(!(name === "" || typeof name === "undefined"))
			document.getElementById("todo-input-box").style.borderColor = '#fff';
		else
			document.getElementById("todo-input-box").style.borderColor = '#b50030';
		}
	
	saveTodo(){
		const name = document.getElementById("todo-input-box").value;
		if(name === "" || typeof name === "undefined"){
			document.getElementById("todo-input-box").style.borderColor = '#b50030';
		}
		else{
			document.getElementById("todo-input-box").style.borderColor = '#fff';
			TodoActions.createTodo({name:name, status:'Initiated'});
			document.getElementById("todo-input-div").style.display = 'none';
			document.getElementById("todo-input-box").value = '';
			document.getElementById("todo-add-button").style.display = 'block';
		}
	}
	
	cancelTodo(){
			document.getElementById("todo-input-box").style.borderColor = '#fff';
			document.getElementById("todo-input-div").style.display = 'none';
			document.getElementById("todo-input-box").value = '';
			document.getElementById("todo-add-button").style.display = 'block';
	}
	
    
    render(){
				return (
					<div>
						<div className="todo-header">
							<h1 className="inline">Todos</h1>
							<button id="todo-add-button" className="inline pull-right btn btn-success" onClick={this.addTodo.bind(this)}>Add Todo</button>
						</div>
						<div className="todo-input-div" id="todo-input-div">
							<p>Enter the todo name:</p>
							<input id="todo-input-box" className="form-control inline todo-input-box" onChange={this.removeError.bind(this)}/>
							<button className="inline btn btn-warning" onClick={this.cancelTodo.bind(this)}>Cancel</button>
							<button className="inline pull-right btn btn-success" onClick={this.saveTodo.bind(this)}>Save Todo</button>
						</div>
					</div>
			);
	}
}


export default AddPanel;

