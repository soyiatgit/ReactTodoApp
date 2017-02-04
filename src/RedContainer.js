import React from 'react';
import Todos from './Todos';

//header component of the app, this will be embedded into App component
class RedContainer extends React.Component{
	render(){
		return (
					<div className="redcontainer" id="content">
					<Todos completed = 'true'/>
					</div>
			)
	}
}


export default RedContainer;

