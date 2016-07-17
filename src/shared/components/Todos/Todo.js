import React from 'react';

const Todo = ({ id, text }) => (
  <li id={id}>
    {text}
  </li>
);

Todo.propTypes = {
  id: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]).isRequired,
  text: React.PropTypes.string.isRequired,
};

export default Todo;
