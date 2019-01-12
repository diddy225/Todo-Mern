import React from 'react'

const TodoInput = (props) => {
  return (
    <form 
    className="ui fluid input icon"
    onSubmit={props.onSubmit}
    >
      <input 
      name="todoInput"
      placeholder="Enter a Todo"
      onChange= {props.onChange}
      value={props.inputValue}
      />
    </form>
  )
}

export default TodoInput