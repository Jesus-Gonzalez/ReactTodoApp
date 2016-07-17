
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';

export { ADD_TODO, COMPLETE_TODO, DELETE_TODO };

export function addTodo(id, text) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      text,
    },
  }
};

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    },
  }
};

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    }
  }
};
