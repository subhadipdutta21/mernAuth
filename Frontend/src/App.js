import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route } from 'react-router-dom'
import ToDo from './components/ToDo';
import CreateTodo from './components/CreateTodo.js';
import EditTodo from './components/EditTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/todo' component={ToDo} />
        <Route path='/create' component={CreateTodo} />
        <Route path='/edittodo/:id' component={EditTodo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
