/*
need to do npm i -S redux to install REDUX.
With Redux we have just one big store unlike Flux where we have several store as per our application. This big store contains all your data. We can have different property for each
store in this big store. In Redux, the store is not really changed, rather a new version of
a state is created on every change. So we can roll back our app to a desired state at any point of time.
*/

import { createStore } from 'redux';

//creating a reducer here; this is required for a store in redux.
//Whenever an event is dispatched to a store, it goes through reducer. Reducer recieves the
//current state of the store and the dispatched action. The value returned by the reducer
//becomes the new  value of the store.
const reducer = function(state, action){
	switch (action.type){
		case "INC": {
			return state + action.payload;
		}
	}
}

//creating a store here; need to pass the reducer and an initial state of your store
//you can initialise your store with any kind of data or even a blank object. Here we are 
//just initialising it with a 0.
const store = createStore(reducer, 0);

//once a store is made, you can subscribe to it, so that you get to know when anything on that store changes.
store.subscribe(() => {
	console.log("store chanegd", store.getState());
});


//you dispatch events to your store similar to as in Flux. A event must have a "type" property
//and some optional data attached. This additional data is commonly known as "payload".
store.dispatch({type:"INC", payload: 1});