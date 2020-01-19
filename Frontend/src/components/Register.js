import React from 'react'
import {connect} from 'react-redux'
import {register} from '../actions/auth-action'

const Register = ({register}) => {

    const [fName, setFname] = React.useState('')
    const [lName, setLname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fName, lName, password, email)
        register(fName, lName, password, email)
    }


    return (
        <div className='container' style={{ width: '40%', paddingTop: '5%' }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First name" 
                        onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last name" 
                        onChange={(e) => setLname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="email" 
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

        </div>
    )
}

export default connect(null,{register})(Register)