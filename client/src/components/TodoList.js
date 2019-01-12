import React from 'react'
import '../css/todolist.css'

const completed = {
  color: 'green',
  fontStyle: 'italic',
  textDecoration: 'line-through'
}

const notCompleted = {
  color: 'red',
  fontStyle: 'normal'
}

const TodoList = (props) => {
  const listofTodos = props.list.map((item) => {
    return (
      <div onClick={() => props.complete(item._id, item.completed)} style={{fontSize: '18px'}}className="item" id="todo" key={item._id}>
        <span style={!item.completed ? notCompleted : completed}>{item.todo.toUpperCase()}</span>
        <div className="right floated content">
          <i onClick={() => props.onClick(item._id)}className="delete large icon"></i>
        </div>
      </div>
    )
  })
  return (
    <div  className="animated ui selection divided middle aligned list">
      {listofTodos}
    </div>
  )
}


export default TodoList