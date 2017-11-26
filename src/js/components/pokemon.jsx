'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Pokemon extends Component{
  render(){
    const {index, pokemonData, url} = this.props;

    return (
            <div className="pokemon--species--container">
              <p>{`00${index+1}`}</p>
              <div className="pokemon--species--sprite">
                <img src={`https://serebii.net/art/th/${index+1}.png`} alt={pokemonData.name}/>
              </div>
              <div className="pokemon--species--name"> {pokemonData.name} </div>
            </div>
           )
    }
}

export default Pokemon;