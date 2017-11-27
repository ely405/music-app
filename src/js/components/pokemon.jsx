'use strict';

import React, {Component} from 'react';


import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  }
};



export default class Pokemon extends Component{
  render(){
    const {index, pokemonData, url} = this.props;
    console.log(this.props)
    console.log(index)

    return (
            <Col className={`pokemon-species `} xs="12" md="3">
              <p>{`00${index}`}</p>
              <img src={`https://serebii.net/art/th/${index}.png`} alt={pokemonData.name}/>
              <h3 className="pokemon--species--name"> {pokemonData.name} </h3>
            </Col>
           )
    }
}