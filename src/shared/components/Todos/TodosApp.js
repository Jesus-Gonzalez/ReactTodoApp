import React from 'react';

import TodoListContainer from '../../containers/TodoListContainer';
import CreateTodoFormContainer from '../../containers/CreateTodoFormContainer';

export default () => (
  <section>
    <TodoListContainer />
    <CreateTodoFormContainer />
  </section>
);
