import React from 'react';
import classes from './BoxWithShadow.scss'

const BoxWithShadow = () => {
  return (
    <div className={classes.BoxWithShadow}>
      <div className={classes.BoxNumer}>1</div>
      <img src="http://www.optimlab.pl/media/img/content-marketing-img.png" alt="dsa"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum mollitia ipsam ullam non laborum suscipit quam, quae ipsa, ad inventore ex nostrum, exercitationem doloremque!</p>
        <button>Przeczytaj artykuł</button>
    </div>
  )
}

export default BoxWithShadow;