'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import PokemonList from './components/PokemonList.jsx';
import NavBar from './components/NavBAr.jsx';

// import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList'


class PokeApp extends Component{
    render(){
        return (
            <MuiThemeProvider>
                <div className="pokeapp">
                    <h1>PokeDex! </h1>
                    <GridList cols={1} container >

                    <NavBar/>
                    </GridList>
                    <PokemonList></PokemonList>
                </div>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <PokeApp></PokeApp>,
    document.getElementById('root')
  );