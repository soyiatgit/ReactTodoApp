import {EventEmitter} from 'events';
import dispatcher from './Dispatcher';

//header component of the app, this will be embedded into App component
class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [{
            name:"Update TFS Status",
            id:1,
			status: 'Completed'
        },{
            name:"Check all Mail Boxes",
            id:2,
			status: 'Cancelled'
        },{
            name:"Mail Defects to Abhinav",
            id:3,
			status: 'Completed'
        },{
            name:"Join Standup Call",
            id:4,
			status: 'In progress'
        },{
            name:"Ask Navanshu for Lunch",
            id:5,
			status: 'Completed'
        },{
            name:"Tea Break at 5",
            id:6,
			status: 'Cancelled'
        }]
    }

    getAllTodos(completed){
		if(!completed)
			return this.todos;
		else{
			var completedTodos = this.todos.filter((t) => {
				return  t.status === 'Completed'
			});
			return completedTodos;
		}
    }
	
	createTodo(todo){
		this.todos.push({
			name: todo.name,
			id: Date.now(),
			status: todo.status
		});
		this.emit("TODO_CHANGED");
	}
	
	deleteTodo(id){
		this.todos = this.todos.filter((t) => t.id !== id);
		this.emit("TODO_CHANGED");
	}
	
	updateTodo(todo){
		this.todos.forEach((t,i) => {
			if(t.id === todo.id)
				this.todos[i] = todo;
				this.todos[i].updatable = false;
		});
		this.emit("TODO_CHANGED");
	}
	
	
	handleDispatchedEvents(events){
		switch(events.type){
			case "CREATE_TODO" :{
				this.createTodo(events.todo);
			}
			case "DELETE_TODO" :{
				this.deleteTodo(events.todo_id);
			}
			case "UPDATE_TODO" :{
				this.updateTodo(events.todo);
			}
		}
	}
}

const todoStore = new TodoStore();
	//window.todoStore = todoStore;
	dispatcher.register(todoStore.handleDispatchedEvents.bind(todoStore));
//window.dispatcher = dispatcher;
export default todoStore;

