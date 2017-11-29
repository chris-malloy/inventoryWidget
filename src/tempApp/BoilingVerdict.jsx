import React from 'react';

function BoilingVerdict(props){
    if(props.celcius >= 100){
        return(
            <h1>The water would boil</h1>
        )
    } else {
        return(
            <h1>The water would NOT boil</h1>
        )
    }
    return(
        <h1>BoilingVerdict Component</h1>
    )
}

export default BoilingVerdict;