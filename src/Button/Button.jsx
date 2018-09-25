import React from 'react';
import classes from './Button.scss';

const Button = ({textValue, onClick}) => {
  return (
    <button 
        className={classes.Button}
        onClick={onClick}>
        {textValue}
    </button>
  )
}

export default Button;