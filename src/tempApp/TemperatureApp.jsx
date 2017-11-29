import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput.jsx'

// two utility functions that are not part of the component, simply js 101 functions
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
//tryConvert tis going to take care of whne the user enters tsomething that ins't a number.
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureApp extends Component{
    constructor(){
        super();
        this.state = {
            temperature: ''
        }
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    }
    handleCelciusChange(value){
        console.log("Someone changed Celius input to " + value);
    }
    handleFahrenheitChange(value){
        console.log("Someone change Fahrenheit Input " + value);
    }
    render(){
        console.log(tryConvert("101",toCelsius));
        return(
            <div>
                <TemperatureInput scale="f" onChange={this.handleFahrenheitChange} />,
                <TemperatureInput scale="c" onChange={this.handleCelciusChange} />,
                <BoilingVerdict />
            </div>
        )
    }
}

export default TemperatureApp;