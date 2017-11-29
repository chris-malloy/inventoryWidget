import React, { Component } from 'react';

class Title extends Component{
    render(){
        return(
            <div className="col-sm-12">
                <div className="col-sm-6">
                    <h1>Name</h1>
                </div>
                <div className="col-sm-6">
                    <h1>Price</h1>
                </div>
            </div>
        )
    }
}

export default Title;