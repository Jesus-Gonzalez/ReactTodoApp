import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todos.actions';


const { localStorage } = window;

const initialState =
  (typeof localStorage.state !== 'undefined' && JSON.parse(localStorage.state)) ||
  { todos: [ { id: 'random-hash', text: 'Do some coding' } ] }

export default (state = initialState, action) => {
  switch (action.type)
  {
    case ADD_TODO:
      const newState = Object.assign({}, state, { todos: state.todos.concat({ id: action.payload.id, text: action.payload.text }) });

      if (typeof window.localStorage === 'undefined')
      {
        console.warn("If the page is reloaded, it will not persist data.");
      } else {
        localStorage.state = JSON.stringify(newState);
      }

      return newState;

    case COMPLETE_TODO:
      // TODO
      break;

    case DELETE_TODO:
      // TODO
      break;

    default:
      return state;
  }
}
