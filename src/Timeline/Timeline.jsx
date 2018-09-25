import React, { Component } from 'react';
import classes from './Timeline.scss';

class Timeline extends Component {
  render() {
    return (
      <div className={classes.Timeline}>
        <div style={{borderTopRightRadius: '6px'}}>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, recusandae!</p>
        </div>
        <div>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, recusandae!</p>
        </div>
        <div style={{borderBottomRightRadius: '6px'}}>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, recusandae!</p>
        </div>
      </div>
    )
  }
}


export default Timeline;