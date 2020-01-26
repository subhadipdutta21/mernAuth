import axios from 'axios'

export const getTodo = () => async dispatch => {
    axios.get('/todos/alltodos')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: 'GET_TODO',
                payload : res.data
            })
        })
}