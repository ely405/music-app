'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.

class Pokemon extends Component{
  render(){
    // const {pokemon,id} = this.props;
    return (<div className="pokemon--species">
            <div className="pokemon--species--container">
              <div className="pokemon--species--sprite">pokemon</div>
              {/* <div className="pokemon--species--name"> {pokemon.name} </div> */}
            </div>
          </div>)
    }
}


export default Pokemon;