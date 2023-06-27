import React from 'react'
import Person from './Person'

export default function NameList() {
    const names = [
        {name: 'Cosmos', devil: 'Imissyou Devil'}, 
        {name: 'Denji', devil: 'Chainsaw Devil'}, 
        {name: 'Power', devil: 'Blood Devil'}
    ]
    const personList = names.map((names,index) => (
        <Person key={index} person={names}></Person>
    ))
    return <div>{personList}</div>

}
