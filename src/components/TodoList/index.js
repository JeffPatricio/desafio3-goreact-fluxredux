import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class TodoList extends Component {

  addTodo = (e) => {
    this.props.addTodo("toamr um Cafézaum adicionado");
  }

  render() {
    return (
      <Fragment>
        <ul>
          {
            this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)
          }
        </ul>
        <br />
        <button onClick={this.addTodo}>Add Todo</button>
      </Fragment>
    );
  }
}

const mapState = state => ({
  todos: state.todos
});

const mapDispatch = dispatch => ({
  addTodo: text => dispatch({
    type: "ADD_TODO",
    payload: {
      text
    }
  })
});

export default connect(mapState, mapDispatch)(TodoList);