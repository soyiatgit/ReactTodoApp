import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BlueContainer from './BlueContainer';
import RedContainer from './RedContainer';
import Footer from './Footer';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/* ReactDOM.render takes two arguments, first of which is the component to be 
displayed while second is the DOM placeholder to put that component. While 
using `react-router`, the first argument is the Router congiguration as shown
below and second argument continues to remain the same. 

In the below code parenthesis around first argument are optional.

The code matches '/' route to App component. The '/' route by the way is the 
parent route of all the sub routes.
*/
ReactDOM.render(
  (
	  <Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={BlueContainer}/>
			<Route path="/list" component={BlueContainer}/>
			<Route path="/completed" component={RedContainer}/>
		</Route>
	  </Router>
  ),
  document.getElementById('root'));