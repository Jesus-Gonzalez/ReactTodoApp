import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todos.actions';

const { localStorage } = window;

const initialState =
  (typeof localStorage.state !== 'undefined' && JSON.parse(localStorage.state)) ||
  { todos: [{ id: 4321, text: 'Do some coding' }] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newState =
        Object.assign({}, state, {
          todos: state.todos.concat({
            id: action.payload.id,
            text: action.payload.text,
          }),
        });

      if (typeof localStorage !== 'undefined') {
        localStorage.state = JSON.stringify(newState);
      }

      return newState;
    }

    case COMPLETE_TODO: {
      // TODO
      return state;
    }

    case DELETE_TODO: {
      // TODO
      return state;
    }

    default: {
      return state;
    }
  }
};
