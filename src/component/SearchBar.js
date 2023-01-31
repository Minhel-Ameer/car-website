import React from 'react'
import { useState } from 'react'

function SearchBar({enterMake}) {
  const [inputData, setInputData]=useState('') 
  const [searchModel, setSearchModel]=useState('')

  const inputEvent = (event) =>{
    console.log(event.target.value, "event.target.value");
    setInputData(event.target.value)
    console.log(inputData, "inputData")
   }
  const onSubmit = () =>{
    setSearchModel(inputData);
    console.log(searchModel,"searchmodel")
  }
  return (
    <div>
      <input type='text' placeholder={enterMake} onChange={inputEvent} value={inputData}/>
              <button onClick={onSubmit}>Search</button>
    </div>
  )
}

export default SearchBar
