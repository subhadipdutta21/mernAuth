const initState = {
    todos: null
}


export default function (state = initState, action) {
    switch (action.type) {
        case 'GET_TODO':
            return {
                ...state,
                todos: action.payload
            }
        default: return state

    }
}