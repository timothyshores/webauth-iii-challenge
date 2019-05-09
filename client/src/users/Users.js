import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Users extends React.Component {
    state = {
        users: [],
        department: '',
    };

    render() {
        return (
            <>
                {this.state.department === ''
                    ? null
                    : <h2>List of {this.state.department}s</h2>
                }
                {this.state.users.map(u => (
                    <p key={u.id}>{u.username}</p>
                ))}
            </>
        );
    }

    componentDidMount() {
        const requestConfig = {
            headers: {
                authorization: localStorage.getItem('authorization'),
            },
        };
        axios
            .get('http://localhost:5000/api/users', requestConfig)
            .then(res => {
                this.setState({ users: res.data });
                this.setState({ department: res.data[0].department });
            })
            .catch(err => console.error(err));
    }
}

export default Users;
