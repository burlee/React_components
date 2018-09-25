import React from 'react';
import classes from './BoxWithShadow.scss'

const BoxWithShadow = ({icon, method, spanValue}) => {
  return (
    <div className={classes.BoxWithShadow}>
      <div className={classes.Box}><i className={icon}></i></div>
        <div className={classes.Card}>
          <i className={icon}></i>
          <span style={{textAlign: 'center', width: '100%'}}>{spanValue}</span>
          <span></span>
        </div>
      <div>
        <span>{method}</span>
      </div>
    </div>
  )
}

export default BoxWithShadow;