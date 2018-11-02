import React, { Component } from 'react';
import classes from './Chat.scss';

class Chat extends Component {
    state = {
        chatIsOpen: false
    }
    render() {
        return (
            <div className={classes.Chat}>
                {this.state.chatIsOpen ? 
                    <div className={classes.ChatIsOpen}>
                        <header>
                            <h5>Witaj w serwisie</h5>
                            <i className="far fa-window-minimize" onClick={() => this.setState({chatIsOpen: false})}></i>
                        </header>
                        <textarea placeholder="Wpisz swoja wiadomosc"></textarea>
                    </div>
                    :
                    <div className={classes.ChatHidden} onClick={()=>this.setState({chatIsOpen: true})}>
                        <h5>Skontaktuj się</h5>
                        <i className="fas fa-comment-alt"></i>
                    </div>
                }
            </div>
        );
    }
}

export default Chat;
