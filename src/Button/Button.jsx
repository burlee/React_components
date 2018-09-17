import React from 'react';
import classes from './Button.scss';

const Button = ({buttonBgColor, buttonFontColor, textValue, onClick}) => {
  return (
    <button 
        className={classes.Button}
        style={{background: buttonBgColor, color: buttonFontColor}}
        onClick={onClick}>
        {textValue}
    </button>
  )
}

export default Button;