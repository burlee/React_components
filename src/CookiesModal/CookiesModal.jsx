import React, { Component } from 'react';
import classes from './CookiesModal.scss';
import Aux from '../Hoc/aux_x';

export default class CookiesModal extends Component {
    state = {
        showCookiesModal: true
    }
    render() {
        return (
            <Aux>
                {this.state.showCookiesModal ? 
                <div className={classes.CookiesModal}>
                    <p>Informujemy, że ta strona korzysta z plików cookies. Odwiedzając naszą stronę bez dokonania zmian ustawień swojej przeglądarki, wyrażasz zgodę na wykorzystanie przez nas plików cookies w celu ułatwienia korzystania z serwisu.</p>
                    <button onClick={() => this.setState({showCookiesModal: false})}>X</button>
                </div>
                : null }
            </Aux>
                
        )
    }
}
