import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: [],
        department: ''
    };

    render() {
        return (
            <>
                <h2>Users</h2>
                <ul>
                    {this.state.users.map(u => (
                        <li key={u.id}>{u.username}</li>
                    ))}
                </ul>
            </>
        );
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/users', { headers: { authorization: localStorage.getItem('authorization') } })
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => console.error(err));
    }
}

export default Users;
