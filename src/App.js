import React, { Component } from 'react';
import './App.css';
// custom components
import Search from './SearchBar';
import Title from './Title.js';
import SportingGoods from './SportingGoods';
import Electronics from './Electronics';



class App extends Component {
	render() {
		return (
		<div className="App">
			<Search />
			<Title />
			<SportingGoods />
			
		</div>
		);
	}
}

export default App;
