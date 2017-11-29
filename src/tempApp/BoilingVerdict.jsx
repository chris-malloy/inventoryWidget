import React from 'react';

function BoilingVerdict(props){
if (props.celsius >= 100) {
        return(
            <h1>The water would boil</h1>
        )
    } else {
        return(
            <h1>The water would NOT boil</h1>
        )
    }
}

export default BoilingVerdict;