'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import {Button} from 'react-bootstrap';


import RaisedButton from 'material-ui/RaisedButton';

class AppButton extends Component {
    render(){
        console.log('button', this.props)
        return ( 
            <RaisedButton label="Default" />
        )
    }
}

export default AppButton;