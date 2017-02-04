import React from 'react';
import Todo from './Todo';
import AddPanel from './AddTodo';
import TodoStore from './TodoStore';
import * as TodoActions from './Actions'; //import all export from this file in an //object like map


class Todos extends React.Component{
    constructor(props){
        super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {};
        this.state.todos = TodoStore.getAllTodos(props.completed);
    }
	
	componentWillMount(){
		TodoStore.on("TODO_CHANGED", this.getTodos);
	}
	
	componentWillUnmount(){
		TodoStore.removeListener("TODO_CHANGED", this.getTodos);
	}
	
	getTodos(){
		this.setState({todos : TodoStore.getAllTodos(this.props.completed)});
	}
	
    render(){
        const { todos } = this.state;
        const TodoComponents = todos.map((todo) => { 
            return <Todo key={todo.id} {...todo}/>;
        });
		if(this.props.completed !== 'true')
			var addPanel = <AddPanel /> ;
        return (
					<div>
						{addPanel}
						<div className="todos-div">{TodoComponents}</div>
					</div>
			);
	}
}


export default Todos;

