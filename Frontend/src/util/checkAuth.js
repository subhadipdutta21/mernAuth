export const checkAuth =()=> {
    let token = localStorage.getItem("token")
    if(!token) return false
    else return true
}