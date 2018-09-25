import React, { Component } from 'react';
import classes from './LeftNavigation.scss';

class LeftNavigation extends Component {
  render() {
    return (
      <div className={classes.LeftNavigation}>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Realization</li>
            <li>Opinion</li>
            <li>Example</li>
            <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default LeftNavigation;