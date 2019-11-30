import React from 'react';
import axios from 'axios'
import {withRouter} from 'react-router'

class EditTodo extends React.Component {
    state = {
        desc: '',
        res: '',
        priority: '',
        isCompleted: null,
        todoData: [],
        isCompleted: false
    }

    componentDidMount() {
        this.getTodo().then(res => {
            console.log(res)
            this.setState({
                todoData: res,
                desc: res.description,
                res: res.responsible,
                priority: res.priority,
                isCompleted: res.isCompleted
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getTodo = () => {
        return axios.get('/todos/' + this.props.match.params.id).then(res => res.data).catch(err => console.log(err))
    }

    updateTodo = () => {
        return axios.post('/todos/update/' + this.props.match.params.id, {
            desc: this.state.desc,
            res: this.state.res,
            priority: this.state.priority,
            isCompleted: this.state.isCompleted
        }).then(res => res.data).catch(err => console.log(err))
    }

    submit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.updateTodo().then(res=>{
            console.log(res)
            this.props.history.push('/todo')
        })

    }

    render() {
        return (
            <div className='container' style={{ width: '40%', paddingTop: '5%' }}>
                <h3>Edit</h3>
                <form onSubmit={this.submit}>

                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={this.state.desc}
                            name='desc'
                            onChange={(e) => this.handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label>Responsible: </label>
                        <input
                            type="text"
                            className="form-control"
                            name='res'
                            defaultValue={this.state.res}
                            onChange={(e) => this.handleChange(e)} />
                    </div>

                    <label>Select Priority</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="low"
                            checked={this.state.priority === 'low' ? true : false}
                            onChange={() => this.setState({ priority: 'low' })}
                        />
                        <label className="form-check-label">Low</label>
                    </div>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="high"
                            checked={this.state.priority === 'high' ? true : false}
                            onChange={() => this.setState({ priority: 'high' })}
                        />
                        <label className="form-check-label">High</label>
                    </div>

                    <hr />

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                            onChange={() => this.setState({ isCompleted: !this.state.isCompleted })}
                            checked = {this.state.isCompleted ? true:false}
                        />
                        <label className="form-check-label">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(EditTodo);