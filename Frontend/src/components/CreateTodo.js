import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const CreateTodo = () => {

    const [desc, setDesc] = React.useState('')
    const [res, setRes] = React.useState('')
    const [priority, setPriority] = React.useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log(priority)
        createTodo().then(res=>console.log(res))
        
    }

    const createTodo =()=>{
        return axios.post('/todos/createtodo',{
            desc,
            res,
            priority,
            isCompleted : false
        }).then(res=>res.data)
        .catch(err=>console.log(err))
    }

    return (
        <div className='container' style={{ width: '40%', paddingTop: '5%' }}>
            <h3>Create New Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" onChange={e => setDesc(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text" className="form-control" onChange={e => setRes(e.target.value)} />
                </div>
                <label>Select Priority</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="low" onClick={e => setPriority(e.target.value)} />
                    <label className="form-check-label">Low</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="high" onClick={e => setPriority(e.target.value)} />
                    <label className="form-check-label">High</label>
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
                <Link to='/todo'>See all todos</Link>
            </form>
        </div>
    )
}

export default CreateTodo