import React from 'react';

import Todo from './Todo';

const TodosList = ({ todos }) => (
  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))
    }
  </ul>
);

TodosList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.any.isRequired,
    text: React.PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TodosList;
