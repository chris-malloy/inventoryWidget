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
            temperature: '32',
            scale: 'c',
        }
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.handleCelciusChange = this.handleCelciusChange.bind(this)
    }

    handleCelciusChange(value){
        console.log("Someone changed Celius input to " + value);
        this.setState({
            scale: "c",
            temperature: value
        })
    }

    handleFahrenheitChange(value){
        console.log("Someone change Fahrenheit Input " + value);
        this.setState({
            scale: "f",
            temperature: value
        })  
    }

    render(){
        // set up local vars to save on typing
        const scale = this.state.scale;
        const temperature = this.state.temperature;

        if(scale === "c"){
            var fTemp = tryConvert(temperature, toFahrenheit)
            var cTemp = temperature;
        } else if (scale === "f"){
            var fTemp = temperature;
            var cTemp = tryConvert(temperature, toCelsius)
        }

        return(
            <div id="temp-app">
                <TemperatureInput temperature={fTemp} scale="f" onChange={this.handleFahrenheitChange} />,
                <TemperatureInput temperature={cTemp} scale="c" onChange={this.handleCelciusChange} />,
                <BoilingVerdict temperature={parseFloat(cTemp)} />
            </div>
        )
    }
}

export default TemperatureApp;