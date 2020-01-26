import React from 'react';
import UserCard from './UserCard';
import axios from 'axios'


const Users = () => {

    const [users, setUsers] = React.useState(null)

    React.useEffect(() => {
        axios.get('/users/allusers').then(res => {
            setUsers(res.data)
        })
    }, [])

    return (
        <>
            <h5>we're Users</h5>
            <br />
            <div style={{ display: 'flex' }}>
                {
                    users && users.map(user => (
                        <UserCard title={user.first_name + " " + user.last_name} />
                    ))
                }
            </div>
        </>
    );
}

export default Users;