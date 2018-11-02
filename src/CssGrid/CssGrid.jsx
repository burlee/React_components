import React, { Component } from 'react'
import classes from './CssGrid.scss'
import MyContext from '../MyProvider/config';

class CssGrid extends Component {

  fetchID = (id, title, posts, dispatch) => {
    const postsList = posts;
    
    const filteredPosts = postsList.filter( post => {
      return post.id !== id;
    })
    
    dispatch({
      type: 'FETCH_POSTS',
      payload: filteredPosts
    })

  }
  
  render() {
    let post = 
    <MyContext.Consumer>
      { state => {
          const { posts, dispatch } = state.state;
          return(
              posts.map( ({id, title}) => {
              return <React.Fragment>
                <span>{title}</span>
                <button onClick={() => this.fetchID(id, title, posts, dispatch)}>Usuń</button>
              </React.Fragment>
            })
          )
        }
      }
   </MyContext.Consumer>
          
    return (
      <div className={classes.CssGrid}>
            {post}
            <h1>Testowe header :_)</h1>
      </div>
    )
  }
}


export default CssGrid;