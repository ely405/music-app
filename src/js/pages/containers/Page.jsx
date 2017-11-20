import React, {Component} from 'react';
import {
    Match, //que tiene que hacer en cada ruta
    Miss, //que hacer cuando no encuentre una ruta (404)
    Link //para moverse entre cada una de las rutas
} from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx';
import User from './User.jsx';
import Error404 from './Error404.jsx';


class Page extends Component {
    render(){
        return(
            <main role="application">
                {/* Lista de artículos */}
                <Match
                    pattern='/'
                    exactly
                    component={Home}
                />
                <Match
                    pattern='/about'
                    exactly 
                    component={About}
                />
                {/* Detalle de usuario */}
                <Miss
                    pattern='/user/:id'
                    exactly
                    component={User}
                />
                <Miss
                    component={Error404}
                />
            </main>
        );
    }
}

export default Page;