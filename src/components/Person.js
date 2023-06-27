import React from 'react'

export default function Person({person}) {
  return (
    <div>
        <li>
            My name is: {person.name} my devil is {person.devil}
        </li>
    </div>
  )
}
