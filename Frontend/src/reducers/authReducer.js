const initState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    user:null
}

export default function(state = initState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS' :
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated : true
            }

        case 'REGISTER_SUCCESS' :
            return {
                ...state,
                ...action.payload,
                
            }
        default : return state
    }
}