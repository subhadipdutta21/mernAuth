import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const ToDo = (props) => {

  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    axios.get('/todos/alltodos')
      .then(res => {
        console.log(res.data)
        setTodos(res.data)
      })
  }, [])


  return (
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
          {todos.length > 0 && todos.map(todo => (
            <tr key={todo._id}>
              <td style={{textDecoration: todo.isCompleted ?'line-through':'none' }}>{todo.description}</td>
              <td style={{textDecoration: todo.isCompleted ?'line-through':'none' }}>{todo.responsible}</td>
              <td style={{textDecoration: todo.isCompleted ?'line-through':'none' }}>{todo.priority}</td>
              <td>
                <Link to={'/edittodo/' + todo._id}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to='/create'>Create todo</Link>
    </div>

  );
}

export default ToDo;