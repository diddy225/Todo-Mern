const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = Schema({
  todo: {
    type: String,
    required: 'You must enter a TODO'
  },
  completed: {
    type: Boolean
  }
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;