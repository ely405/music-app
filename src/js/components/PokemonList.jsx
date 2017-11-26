'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


import Pokemon from './pokemon.jsx';
import AppButton from './grid.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class PokemonList extends Component {
    constructor(props){
        super(props);
        this.state = {
            species: [],
            fetched: false,
            loading: false
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
    
        const myHeaders = new Headers({
            "Content-Type": "text/plain",
            "X-Custom-Header": "ProcessThisImmediately",
            "Access-Control-Allow-Origin": "*"
        });
        
        const miInit = { method: 'GET',
        headers: myHeaders,
        mode: 'no-cors',
        cache: 'default' }
        
        fetch('http://pokeapi.co/api/v2/pokemon?limit=1', miInit)
        .then(response => {return response.json()})
        .then(r=>console.log(r))
        .catch((error)=> {
            console.log(error,'error')
        });
    
        fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    species: data.results,
                    fetched: true,
                    loading: true
                });
                console.log('fecth species', this.state.species)
                console.log('fetch', this.state.fetched)
            });
           
    }

    render(){
        const {species, fetched, loading} = this.state;

        let content;
        console.log('fetched', fetched)
        if(fetched == true){
            content =   <div className="pokemon-list">
                            {species.map((poke, index)=>{
                                console.log('poke', poke);
                                <Pokemon key={poke.name} index={index} pokemonData={poke}/>
                            })}
                        </div>
        }else if(loading && !fetched){
            content =   <div>cargando...</div>
        }else{
            content = <div>no hay nada</div>
        }
        return content
    }
}

export default PokemonList;