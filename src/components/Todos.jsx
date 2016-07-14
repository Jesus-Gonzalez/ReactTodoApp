import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todos.actions';

import CreateTodoForm from './CreateTodoForm.jsx'

const Todo = ({ id, text }) => (
  <li id={id}>
    { text }
  </li>
);

const TodosList = ({ todos, onCreateTodoFormSubmit }) => (

  <section>
    <ul>
      {
        todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))
      }
    </ul>

    <CreateTodoForm onSubmit={onCreateTodoFormSubmit} />
  </section>
);


function mapStateToProps(state)
{
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    onCreateTodoFormSubmit: (text) => {
      // Weak method to generate Key ID (demo)
      dispatch(addTodo(new Date().getTime(), text));
    }
  }
}

const TodosListContainer = connect(mapStateToProps, mapDispatchToProps)(TodosList);

export default TodosListContainer;
