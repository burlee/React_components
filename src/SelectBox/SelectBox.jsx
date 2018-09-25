import React, { Component } from 'react';
import classes from './SelectBox.scss';

export default class SelectBox extends Component {
  state = {
      boxColor: `#ac9dc7`
  }

  selectedBox = () => {
    this.setState({boxColor: `rgba(89, 60, 143)`});
    if(this.state.boxColor === `rgba(89, 60, 143)`){this.setState({boxColor: `#ac9dc7`})}
  }

  render() {
    return (
      <div onClick={this.selectedBox} className={classes.SelectBox} style={{border: `3px solid ${this.state.boxColor}`}}>
        <div>
            <i className="fas fa-check-circle" style={{color: `${this.state.boxColor}`}}></i>
        </div>
        <h2>Wybierz plan</h2>
        <p>Wybierz, amet consectetur adipisicing elit. Minima quam praesentium velit atque quod. Atque veritatis minus saepe dolores est modi officiis tempora fugiat fuga?</p>
      </div>
    )
  }
}
