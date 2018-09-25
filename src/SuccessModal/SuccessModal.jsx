import React, { Component } from 'react'
import classes from './SuccessModal.scss'

class SuccessModal extends Component {
  state = {
    showSuccessSign: false
  }  

  componentDidMount(){
      setTimeout(()=>{
          this.setState({showSuccessSign: true})
      },2000)
  }

  render() {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.SuccessModalTop}>
                <span>Done</span>
            </div>
            <div className={classes.SuccessModal}>
                {this.state.showSuccessSign ?
                    <div>
                        <i className="fas fa-check"></i>
                    </div>
                    :
                    <div className={classes.RotateAnimation} style={{border: 'none'}}></div>
                }
                <h2>Success</h2>
                <span>File upload</span>
            </div>
        </div>
    )
  }
}

export default SuccessModal;