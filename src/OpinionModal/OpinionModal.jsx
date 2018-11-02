import React, { Component } from 'react';
import classes from './OpinionModal.scss';

class OpinionModal extends Component {
    state = {
        opinion_1: true,
        opinion_2: false,
        opinion_3: false
    }

    render() {
        return (
            <div className={classes.OpinionModal}>
                <div>
                    {this.state.opinion_1 ? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, alias.</p> : null }
                    {this.state.opinion_2 ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam velit voluptatum laborum nam voluptate vero quae quod commodi numquam!</p> : null }
                    {this.state.opinion_3 ? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, alias.</p> : null }
                </div>
                <div className={classes.OpinionButtonBox}>
                    <button onClick={() => this.setState({opinion_1: true, opinion_2: false, opinion_3: false})}></button>
                    <button onClick={() => this.setState({opinion_2: true, opinion_1: false, opinion_3: false})}></button>
                    <button onClick={() => this.setState({opinion_3: true, opinion_2: false, opinion_1: false})}></button>
                </div>
            </div>
        );
    }
}

export default OpinionModal;
