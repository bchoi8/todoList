import React, { Component } from 'react';
import Todos from './components/Todos';
import { bounceIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import AddTodo from './components/AddTodo';
import './css/base.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Do homework',
        completed: false
      },
      {
        id: 3,
        title: 'Start project',
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    const Bounce = styled.div`
      animation: 2s ${keyframes`${bounceIn}`};
    `;
    return (
      <div>
        <div className='title'>
          <Bounce>
            <h1 className='headerText'>To Do List</h1>
          </Bounce>
        </div>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
