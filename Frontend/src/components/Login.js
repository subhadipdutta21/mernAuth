import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [err, setErr] = React.useState('')

    const submit = (e) => {
        e.preventDefault()
        console.log(email, password)
        login(email, password).then(res => {
            if (res.token) {
                localStorage.setItem('token',res.token)
                props.history.push('/todo')
            } else{
                setErr(res.error)
            }
        })
    }

    // login function

    const login = (email, password) => {
        return axios.post('/users/login', {
            email,
            password
        }).then(res => res.data).catch(err => console.log(err))
    }

    return (
        <div className='container' style={{ width: '40%', paddingTop: '5%' }}>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {err.length > 0 &&
                    <div className="form-group">
                        <h6 style={{ color: 'red' }}>{err}</h6>
                    </div>}
                <button type="submit" className="btn btn-primary">Login</button>
                <br /><br/>
                <h6>Don't have account? <Link to='/register'>Register</Link> </h6>
            </form>
        </div>
    )
}

export default withRouter(Login)