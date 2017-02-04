/*
need to do npm i -S redux to install REDUX.
With Redux we have just one big store unlike Flux where we have several store as per our application. This big store contains all your data. We can have different property for each
store in this big store. In Redux, the store is not really changed, rather a new version of
a state is created on every change. So we can roll back our app to a desired state at any point of time.

Since you have your whole application data in one store, which means one JS object. You will not want whole of this data to be handled always for every action. For this we use multiple 
reducers, one working at one property of your store and all these can be combined together to 
form your Redux reducer.

When any reducer fire it gets to handle only the data which has been assigned to it
*/

import { combineReducers, createStore } from 'redux';

//creating a reducer here; this is required for a store in redux.
//Whenever an event is dispatched to a store, it goes through reducer. Reducer recieves the
//current state of the store and the dispatched action. The value returned by the reducer
//becomes the new  value of the store. If you have multiple reducers (each reducer gets each dispatched event) and you are using combineReducers to combine them like here, in that case the state of your reducer contains only the portion of your store that is assigned to it. For example the UserReducer below gets only user property from our store and can change only the same property. This mapping is provided while combining.
const UserReducer = function(state={}, action){
	//always return smething from your reducers
	switch(action.type){
		case "CHANGE_NAME":{
			//getting a new state from old state using ES6 destructuring and then modifying
			//name property on it
			state = {...state, name: action.payload};
		}
		case "CHANGE_AGE":{
			state = {...state, age: action.payload};
		}
	}
	return state;	
}

//The TechReducer below gets only techs property from our store and can change only the same property.Need to pass initial state of properties like below while using combineReducers.
//The TechReducer gets "CHANGE_AGE" and "CHANGE_NAME" events as well and can react to them but it can only change 'techs' field if it wants.
const TechReducer = function(state=[], action){
	//always return smething from your reducers
	switch(action.type){
		case "CHANGE_TECH":{
			state = action.payload;
		}
	}
	return state;
}


//combining and mapping the reducers to their store property here. This reducer shall be passed while creating store.
const mainReducer = combineReducers({
	user : UserReducer,
	techs : TechReducer
})
//creating a store here; need to pass the reducer. While using combineReducers, we do not apss //initial state of store here. Rather we pass the initial state of each property as state to its
//own reducer
const store = createStore(mainReducer);

//once a store is made, you can subscribe to it, so that you get to know when anything on that store changes.
store.subscribe(() => {
	console.log("store chanegd", store.getState());
});


//you dispatch events to your store similar to as in Flux. A event must have a "type" property
//and some optional data attached. This additional data is commonly known as "payload". It can very well be an object or an array or a primitive.
store.dispatch({type:"CHANGE_NAME", payload: "Saurabh"});
store.dispatch({type:"CHANGE_AGE", payload: "25"});
store.dispatch({type:"CHANGE_TECH", payload: []});