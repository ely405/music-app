'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Grid from 'material-ui/GridList';

import Container from  'muicss/lib/react/container.js' ;


import Pokemon from './pokemon.jsx';
        

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
            console.log('error', error)
        });
    
        fetch('http://pokeapi.salestock.net/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data=>{
                this.setState({
                    species: data.results,
                    fetched: true,
                    loading: true
                });
            });
           
    }

    render(){
        const {species, fetched, loading} = this.state;

        let content;
        if(fetched == true){
            content =   <Container className="pokemon-list" fluid='true'>
                            {species.map((pokemon,id)=><Pokemon key={pokemon.name} index={id+1} pokemonData={pokemon}/>)}
                        </Container>
        }else if(loading && !fetched){
            content =   <div>cargando...</div>
        }else{
            content = <div>no hay nada</div>
        }
        console.log('content', content)
        return content;
    }
}

export default PokemonList;