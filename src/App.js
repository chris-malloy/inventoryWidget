import React, { Component } from 'react';
import './App.css';

// custom components
import SearchBar from './SearchBar';
import ProductTable from './ProductTable.js';



class App extends Component {
	constructor(){
		super();
		this.state = {
			serchTerm: ""
		}
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}
	handleFilterChange(newValue){
		this.setState({
			searchTerm: newValue
		})
		console.log("My child component ran me!")
	}

	render() {
		const searchTerm = this.state.searchTerm;
		return (
		<div className="App container">
			<SearchBar onChange={this.handleFilterChange} />
			<ProductTable searchTerm={searchTerm} />
		</div>
		);
	}
}

export default App;
