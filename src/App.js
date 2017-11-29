import React, { Component } from 'react';
import './App.css';

// custom components
import SearchBar from './SearchBar';
import ProductTable from './ProductTable.js';



class App extends Component {
	render() {
		return (
		<div className="App">
			<SearchBar />
			<ProductTable />
		</div>
		);
	}
}

export default App;
