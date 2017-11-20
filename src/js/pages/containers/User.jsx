import React, {Component} from 'react';
import {Link} from 'react-router';

class User extends Component {
    render(){
        return(
            <section name="User">
                <h1>User</h1>
                <Link to='/'>Go back home</Link>
            </section>
        );
    }
}

export default User;