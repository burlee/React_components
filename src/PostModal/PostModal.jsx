import React, { Component } from 'react';
import classes from './PostModal.scss';

class PostModal extends Component {
  state = {
    showSocialContainer: false
  }

  render() {
    return (
      <div className={classes.PostModal}>
        <div className={classes.PostButton}>
            <i className="fas fa-arrow-right"></i>
        </div>
        <div className={classes.PostInformation}  
             onMouseEnter={()=>this.setState({showSocialContainer: true})}
             onMouseLeave={()=>this.setState({showSocialContainer: false})} 
            >
            <h1>Redux czy context API</h1>

            {this.state.showSocialContainer ? 
            <div className={classes.SocialContainer}>
              <i className="fab fa-facebook-f"></i>
            </div>
            : null }

        </div>
      </div>
    )
  }
}

export default PostModal;