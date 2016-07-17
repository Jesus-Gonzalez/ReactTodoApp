import { connect } from 'react-redux';

import TodosList from '../components/Todos/TodosList';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodosList);
