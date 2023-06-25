import React from "react";

const Greet = props => {
    const {name, age} = props
    return (
        <div>
            <h1>Hello { name } age { age } </h1>
            {props.children}
        </div>
    )
}


// export const Greet = () => 
// <h1>Hello Testing</h1>

export default Greet