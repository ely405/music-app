import React, {Component} from 'react';
import {Link} from 'react-router';

class About extends Component {
    render(){
        return(
            <section name="About">
                <h1>About</h1>
                <Link to='/'>Go back home</Link>
                <Link to='/random'>Go to 404</Link>
            </section>
        );
    } 
}

export default About; 