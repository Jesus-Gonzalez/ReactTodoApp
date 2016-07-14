import React from 'react';

export default class CreateTodoForm extends React.Component
{
  constructor()
  {
    super();
    this.state = { text: '' }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(v)
  {
    v.preventDefault();
    const input = v.target.todo;
    this.props.onSubmit(input.value);
    input.value = '';
    return false;
  }

  handleInputChange(v)
  {
    this.state.text = v.target.value;
  }

  render()
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="todo" onChange={this.handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
