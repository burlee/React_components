import React, { Component } from 'react';
import classes from './BoxInformation.scss';

export default class BoxInformation extends Component {
    state = {
        animationColor: '#FFF',
        width: 0
    }

    animationStart = () => {
        this.setState({animationColor: 'red'});
        for(let i=0; i<101; i++){
            this.setState({width: i})
        }
    }

    animationEnd = () => {
        this.setState({animationColor: '#FFF', width: 0})
    }

    render() {
        return (
            <div onMouseEnter={this.animationStart} onMouseLeave={this.animationEnd} className={classes.BoxInformation}>
                <div style={{background: this.state.animationColor, width: this.state.width + '%'}}></div>
                <h1>Example</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit error cumque molestias commodi laboriosam expedita alias earum dolor excepturi sit nisi eius similique, nihil corrupti.</p>
            </div>
        )
    }
}
