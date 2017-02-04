import React from 'react';
import {Link} from 'react-router';

//header component of the app, this will be embedded into App component
class Header extends React.Component{
	render(){
		return (
					<div className="header">
						<div>
							<div className="links">
								<Link to="/list">Todos</Link>
							</div>
							<div className="links">
								<Link to="/completed">Completed</Link>
							</div>
						</div>
					</div>
			)
	}
}


export default Header;

