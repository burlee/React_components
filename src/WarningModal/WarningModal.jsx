import React, { Component } from 'react'
import classes from './WarningModal.scss'

class WarningModal extends Component {
  state = {
    showWarningSign: false,
    warningModalIsOpen: true
  }  

  componentDidMount(){
      setTimeout(()=>{
          this.setState({showWarningSign: true})
      },2000)
      console.log(this.props)
  }

  render() {
    return (
        <React.Fragment>
            {this.state.warningModalIsOpen ? 
                <div className={classes.Wrapper}>
                    <div className={classes.WarningModalTop}>
                        <button onClick={()=>this.setState({warningModalIsOpen: false})}>Zamknij</button>
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
                        <span>Wystąpił błąd</span>
                    </div>
                </div> : null
            }
        </React.Fragment>
    )
  }
}

export default WarningModal;