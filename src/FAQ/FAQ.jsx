import React, { Component } from 'react'
import classes from './FAQ.scss'

class FAQ extends Component {
  state = {
      showAnswer_1: false,
      showAnswer_2: false,
      showAnswer_3: false,
      showAnswer_4: false
  }

  render() {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.FAQ}>
                <header>
                    <h1>FAQ</h1>
                    <span>Zobacz najczęsciej zadawane pytania</span>
                </header>
                <div>
                    <h2 onClick={()=>this.setState({showAnswer_1: !this.state.showAnswer_1})}>Lorem ipsum dolor sit amet.</h2>
                    {this.state.showAnswer_1 ? 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eos, iure quas, nulla quibusdam aspernatur sed corporis exercitationem officia nobis fugit accusantium molestias. Perspiciatis, ipsam?</p>
                    : null }
                </div> 
                <div>
                    <h2 onClick={()=>this.setState({showAnswer_2: !this.state.showAnswer_2})}>Lorem ipsum dolor sit amet.</h2>
                    {this.state.showAnswer_2 ? 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eos, iure quas, nulla quibusdam aspernatur sed corporis exercitationem officia nobis fugit accusantium molestias. Perspiciatis, ipsam?</p>
                    : null }
                </div> 
                <div>
                    <h2 onClick={()=>this.setState({showAnswer_3: !this.state.showAnswer_3})}>Lorem ipsum dolor sit amet.</h2>
                    {this.state.showAnswer_3 ? 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eos, iure quas, nulla quibusdam aspernatur sed corporis exercitationem officia nobis fugit accusantium molestias. Perspiciatis, ipsam?</p>
                    : null }
                </div> 
                <div>
                    <h2 onClick={()=>this.setState({showAnswer_4: !this.state.showAnswer_4})}>Lorem ipsum dolor sit amet.</h2>
                    {this.state.showAnswer_4 ? 
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum eos, iure quas, nulla quibusdam aspernatur sed corporis exercitationem officia nobis fugit accusantium molestias. Perspiciatis, ipsam?</p>
                    : null }
                </div> 
            </div>
            <div className={classes.CloseFAQ}>
                <button>Zamknij</button>
            </div>
        </div>
    )
  }
}

export default  FAQ;