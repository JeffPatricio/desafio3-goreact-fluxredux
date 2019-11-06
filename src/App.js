import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store/index";
import TodoList from "./components/TodoList/index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello Boy</h1>

          <TodoList/>
        </div>
      </Provider>
    );
  }
}

export default App;
