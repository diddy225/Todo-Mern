import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
      todoList: []
    }
  }

  componentDidMount () {
    this.getTodos()
  }

  getTodos() {
    axios.get('/api/todos')
    .then((list) => {
      this.setState({
        todoList: list.data
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }

  todoInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  todoSumbit = (event) => {
    const { todoInput } = this.state
    event.preventDefault()
    axios.post('/api/todos', {todo: todoInput, completed: false})
    .then((item) => {
      this.setState(prevState => ({
        todoList: [...prevState.todoList, item.data],
        todoInput: ''
      }))
    })
    .catch(function(err){
      console.log(err)
    })
  }

  handleDelete = (id) => {
    axios.delete(`/api/todos/${id}`)
    .then((item) => {
      this.setState(prevState => ({
        todoList: prevState.todoList.filter(todo => id !== todo._id)
      }))
    })
  }

  handleCompleted = (id, completed) => {
    axios.put(`api/todos/${id}`, {completed: !completed})
    this.getTodos()
    }

  render() {
    return (
      <div style={{marginTop: '10px'}}className="ui container">
        <TodoInput 
          onChange={this.todoInputChange}
          onSubmit={this.todoSumbit}
          inputValue={this.state.todoInput}
        />
        <TodoList 
          list={this.state.todoList}  
          onClick={this.handleDelete}
          complete={this.handleCompleted}
        />
      </div>
    )
  }
}

export default App