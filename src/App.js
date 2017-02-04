import React from 'react';
import Header from './Header';
import Footer from './Footer';

//Class component way of creating DOM components in React
class App extends React.Component{
	render(){
		return (
					<div className="todoContainer">
						<Header />
						{this.props.children}
						<Footer />
					</div>
			)
	}
}


export default App;

