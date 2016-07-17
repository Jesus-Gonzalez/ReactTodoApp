import React from 'react';

class CreateTodoForm extends React.Component
{
  constructor() {
    super();
    this.state = { text: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(v) {
    v.preventDefault();

    const input = v.target.todo;
    if (input.value.length === 0) {
      return;
    }

    this.props.onCreateTodoFormSubmit(input.value);
    input.value = '';
  }

  handleInputChange(v) {
    this.state.text = v.target.value;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="todo" onChange={this.handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

CreateTodoForm.propTypes = {
  onCreateTodoFormSubmit: React.PropTypes.func.isRequired,
};

export default CreateTodoForm;
