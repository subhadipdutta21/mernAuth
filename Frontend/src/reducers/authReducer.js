const initState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    user:localStorage.getItem('user')
}

// console.log(localStorage.getItem('user').first_name)
export default function(state = initState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS' :
            console.log(action.payload)
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('user',JSON.stringify(action.payload.user))
            return {
                ...state,
                isAuthenticated : true,
                user : action.payload.user                
            }

        case 'REGISTER_SUCCESS' :
            return {
                ...state,
                ...action.payload,
                
            }
        default : return state
    }
}