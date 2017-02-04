import dispatcher from './Dispatcher';

export function createTodo(todo){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		todo:todo
	});
}

export function deleteTodo(id){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		todo_id:id
	});
}

export function updateTodo(todo){
	dispatcher.dispatch({
		type: "UPDATE_TODO",
		todo:todo
	});
}