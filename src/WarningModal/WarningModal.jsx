import React, { Component } from 'react'
import classes from './WarningModal.scss'

class WarningModal extends Component {
  state = {
    showWarningSign: false
  }  

  componentDidMount(){
      setTimeout(()=>{
          this.setState({showWarningSign: true})
      },2000)
  }

  render() {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.WarningModalTop}>
                <span>Done</span>
            </div>
            <div className={classes.WarningModal}>
                {this.state.showWarningSign ?
                    <div>
                        <i className="fas fa-exclamation"></i>
                    </div>
                    :
                    <div className={classes.RotateAnimation} style={{border: 'none'}}></div>
                }
                <h2>Error</h2>
                <span>File upload</span>
            </div>
        </div>
    )
  }
}

export default WarningModal;