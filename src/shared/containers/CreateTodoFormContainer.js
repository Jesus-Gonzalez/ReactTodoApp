import { connect } from 'react-redux';

import { addTodo } from '../actions/todos.actions';

import CreateTodoForm from '../components/Todos/CreateTodoForm';

function mapDispatchToProps(dispatch) {
  return {
    onCreateTodoFormSubmit: (text) => {
      // Weak method to generate Key ID (demo)
      dispatch(addTodo(new Date().getTime(), text));
    },
  };
}

export default connect(null, mapDispatchToProps)(CreateTodoForm);
