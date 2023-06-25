import React from "react";

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <p>Hello JSX</p>
    //     </div>
    // )

    return React.createElement(
    'div', 
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null, 'Hello No JSX'))
}

export default Hello