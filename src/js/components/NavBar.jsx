'use strict';

import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';

export default class NavBar extends Component {
    render(){
        return(
            <AppBar title='Pokedex!' iconClassNameRight='muidocs-icon-navigation-expand-more'/>
        )
    }
}