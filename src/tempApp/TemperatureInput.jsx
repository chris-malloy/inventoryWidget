import React, { Component } from 'react';

class TemperatureInput extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    render() {
        // temperature comes from TemperatureApp
        const temperature = this.props.temperature;
        return (
            <div>
                <legend>{this.props.scale}</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default TemperatureInput;