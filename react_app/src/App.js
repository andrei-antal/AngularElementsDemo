import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: 0
    }
  }
  componentDidMount() {
    this.ngElement = this.refs.elem;
    this.ngElement.addEventListener('added', (e) => {
      this.setState({todos: e.detail.length});
    })
  }

  render() {
    console.log('here')
    return (
      <div className="App">
        <todo-app ref="elem"></todo-app>
        <hr />
        Todos in list: {this.state.todos}
      </div>
      
    );
  }
}

export default App;
