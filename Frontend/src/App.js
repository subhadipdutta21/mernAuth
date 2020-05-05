import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './store';
import './App.css';
import CreateTodo from './components/CreateTodo.js';
import EditTodo from './components/EditTodo';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import ToDo from './components/ToDo';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/todo' component={ToDo} />
          <Route path='/create' component={CreateTodo} />
          <Route path='/edittodo/:id' component={EditTodo} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
