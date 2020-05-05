import axios from 'axios'

export const login = (email, password) => async dispatch => {
    return axios.post('/users/login', {
        email,
        password
    }).then(res => {
        console.log(res)
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
        dispatch({
            type: 'LOGIN_FAILED'
        })
    })
}

export const register = (fName, lName, password, email) => async dispatch => {
    return axios.post('/users/register', {
        first_name: fName,
        last_name: lName,
        email,
        password
    }).then(res => {
        console.log(res.data)
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data
        })
    })
        .catch(err => {
            console.log(err)
            dispatch({
                type: 'REGISTER_FAIL'
            })
        })
}
