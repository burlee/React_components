import React, { Component } from 'react';
import classes from './RegisterModal.scss';
import Aux from '../Hoc/aux_x';

class RegisterModal extends Component {
    state = {
        showRegisterModal: true,
        borderColorEmail: '#4c4c4c',
        borderColorPassword: '#4c4c4c',
        emailIsCorrectly: false,
        passwordIsCorrectly: false
    }

    validateAdressEmail = (email) => {
        this.emailValidate(email);
    }

    validatePassword = (password) => {
        this.passwordValidate(password);
    }

    closeModal = () => {
        this.setState({showRegisterModal: !this.state.showRegisterModal})
    }

    sendRegisterForm = (event) => {
        event.preventDefault();
        console.log('Rejestracja')
    }

    passwordValidate = (password) =>{

        let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        if( strongRegex.test(password) === false){
            this.setState({borderColorPassword: 'red', passwordIsCorrectly: false})
        }else{this.setState({borderColorPassword: '#4caf50', passwordIsCorrectly: true})}

        if(password === ''){this.setState({borderColorPassword: 'gray'})}

    }

    emailValidate = (email) => {

        let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])/;

        if( emailRegex.test(email) === false){
            this.setState({borderColorEmail: 'red', emailIsCorrectly: false})
        }else{this.setState({borderColorEmail: '#4caf50', emailIsCorrectly: true})}

        if(email === ''){this.setState({borderColorEmail: 'gray'})}

    }

    render() {
        
        let registerButton = <button disabled={true}>Zarejestruj</button>;

        if(this.state.emailIsCorrectly && this.state.passwordIsCorrectly){
            registerButton = <button>Zarejestruj</button>
        };

        return (
            <Aux>
                {this.state.showRegisterModal ? 
                    <div className={classes.RegisterModal} onClick={()=> this.setState({showRegisterModal: false})}>
                        <div className={classes.RegisterModalForm} onClick={e=> e.stopPropagation()}>
                            <header>
                                <span>Zarejestruj się</span>
                                <button onClick={this.closeModal}>X</button>
                            </header>
                            <form onSubmit={this.sendRegisterForm}>
                                <label htmlFor="email">Podaj adres email:</label>
                                <input onChange={ e => this.validateAdressEmail(e.target.value)} id="email" type="text" style={{borderBottom: `1px solid ${this.state.borderColorEmail}`}} autoComplete="off"/>
                                <label htmlFor="password">Podaj hasło:</label>
                                <input onChange={ e => this.validatePassword(e.target.value)} id="password" type="text" style={{borderBottom: `1px solid ${this.state.borderColorPassword}`}} autoComplete="off"/>
                                {registerButton}
                            </form>
                        </div>
                    </div> : null
                }
            </Aux>
        );
    }
}

export default RegisterModal;
