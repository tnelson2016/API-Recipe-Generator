import React from 'react'



//this use to be a function

  const Form=(props)=>
  <form onSubmit ={props.getRecipe} style={{marginBottom:'2rem'}}>
    <input className='form__input'
        type = 'text'
        placeholder= 'Enter Food Here'
        name='recipeName'
    />

    <button className='form__button'>SEARCH</button>

  </form>




















export default Form
