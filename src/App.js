import React from 'react';
import './App.css';
import Todos from './Todos'

class App extends React.Component {
    state = {
        todos: [
            {id:1, content: 'buy stuff'},
            {id:2, content: 'do more things'}
            ]
        }
    render() {
        return (
        <div>
        <h1>Todos</h1>
        <Todos todos={this.state.todos}/>

        </div>
        );
    }
}

export default App;
