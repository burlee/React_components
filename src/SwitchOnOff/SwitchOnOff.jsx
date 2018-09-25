import React from 'react';
import classes from './SwitchOnOff.scss'

// switchIsTrue: false,
// flexOption: 'flex-start'
// switchOnOffFn = () => {
//     this.setState({switchIsTrue: !this.state.switchIsTrue, flexOption: 'flex-end'})
//     if(this.state.flexOption === 'flex-end'){this.setState({flexOption: 'flex-start'})}
// }


const SwitchOnOff = ({switchOnOffFn, switchIsTrue, flexOption}) => {
  return (
    <div onClick={switchOnOffFn} className={classes.SwitchOnOff} style={{justifyContent: flexOption}}>
      {switchIsTrue ? 
        <div className={classes.On}></div>
        :
        <div className={classes.Off}></div>
      }
    </div>
  )
}

export default SwitchOnOff;