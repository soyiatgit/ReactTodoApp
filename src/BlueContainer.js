import React from 'react';
import Todos from './Todos';


class BlueContainer extends React.Component{
	render(){
		return (
					<div className="bluecontainer" id="content">
						<Todos/>
					</div>
			)
	}
}


export default BlueContainer;

