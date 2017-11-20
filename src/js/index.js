'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import {Link} from 'react-router';

// import Page from './pages/containers/Home.jsx';
import PokemonList from './components/PokemonList.jsx';

import $ from 'jquery';

console.log($('#root'))

class PokeApp extends Component{
    render(){
        return (<div className="pokeapp">
        <h1>PokeDex! </h1>
        <PokemonList></PokemonList>
        </div>
        )
    }
}

ReactDOM.render(
    <PokeApp></PokeApp>,
    document.getElementById('root')
  );