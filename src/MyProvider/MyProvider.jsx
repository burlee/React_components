import React, { Component } from 'react';
import MyContext from './config'

const reducer = (state, action) => {
    switch(action.type){
        case 'IS_LOGIN':
            return{
                ...state,
                isLogin: action.payload
            };
        case 'FETCH_POSTS':
            return{
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}

class MyProvider extends Component {

    state = {
        isLogin: false,
        name: "seweryn",
        age: 25,
        bookLists: ["Harry poter", "crazy ninja", "Lucky look"],
        isLoading: false,
        dispatch: action => this.setState(state => reducer(state, action)),
        posts: []
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                isLoginToggle: (name) => {
                    console.log('name')
                    // this.setState({
                    //     isLogin: !this.state.isLogin,
                    //     name: 'Inne imie'
                    // })
                },
                searchTerm: (searchTerm) => {
                    console.log( 'searchTerm' )
                },
                fetchUserData: (name, surname) => {
                    const data = {
                        imie: name,
                        nazwisko: surname
                    }
                    console.log( data )
                },
                isLoading: () => {
                    this.setState({isLoading: !this.state.isLoading})
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;
