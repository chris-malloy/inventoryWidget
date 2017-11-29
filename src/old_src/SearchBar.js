import React, { Component } from 'react';


class SearchBar extends Component{
        constructor(){
            super();
            this.state = {};
        }
    	handleSubmit(event){
		event.preventDefault();
        var value = document.getElementById('searchTerm').value;
	}
    render(){
        return(
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}>
                    <input id="searchTerm" type="text" placeholder="Search..." className="col-sm-12" />
                    <input type="checkbox" className="col-sm-12" /> Only Show products in stock
                </form>
            </div>
        )
    }
}

export default SearchBar;

// TODO
// - fix search bar look
// - fix checkbox look
// - add checkbox functionality
