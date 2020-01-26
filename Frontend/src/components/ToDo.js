import React from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import Login from './Login';
import { connect } from 'react-redux';
import {getTodo} from '../actions/todo-action'


const ToDo = ({ getTodo, todos }) => {

  // const [todos, setTodos] = React.useState([])
  const [token, setToken] = React.useState(null)

  React.useEffect(() => {
    setToken(localStorage.getItem('token'))
    getTodo()
  }, [getTodo])


  return (
    token ?
      <div className='container' style={{ width: '40%', paddingTop: '5%' }}>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos && todos.map(todo => (
              <tr key={todo._id}>
                <td style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.description}</td>
                <td style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.responsible}</td>
                <td style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.priority}</td>
                <td>
                  <Link to={'/edittodo/' + todo._id}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/create'>Create todo</Link>
      </div> : <Login />

  );
}

const mapStateToProps = state => {
  return {
    todos : state.todoReducer.todos
  }
}

export default connect(mapStateToProps,{getTodo})(ToDo)