import React, { Component } from 'react';
import classes from './Search.scss'

class Search extends Component {
  render() {
    return (
      <div className={classes.Search}>
        <div> 
            <input type="text" placeholder="Wyszukaj..."/>
            <div className={classes.SearchButton}>
                <i class="fas fa-search"></i>
            </div>
        </div>
      </div>
    )
  }
}

export default Search;
