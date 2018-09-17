import React, { Component } from 'react';
import classes from './TopNavigation.scss';

class TopNavigation extends Component {
    state = {
        showDropdownMenu: false,
        windowWidth: window.innerWidth,
        menuIsOpen: true
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    };

    updateDimensions = () => {
        this.setState({windowWidth: window.innerWidth});

        if(this.state.windowWidth >= 769){this.setState({menuIsOpen: true})};
    };

    render() {
        return (
            <div className={classes.TopNavigation}>
                <button onClick={() => this.setState({menuIsOpen: !this.state.menuIsOpen})} className={classes.OpenMenuButton}>X</button>
                {this.state.menuIsOpen ? 
                <ul>
                    <li onMouseEnter={() => this.setState({showDropdownMenu: true})}>
                    Example
                        {this.state.showDropdownMenu ? 
                            <ul onMouseLeave={() => this.setState({showDropdownMenu: false})}>
                                <li><a href="#about">Example Link</a></li>
                                <li><a href="#about">Example Link 1</a></li>
                                <li><a href="#about">Example Link 2</a></li>
                                <li><a href="#about">Example Link</a></li>
                                <li><a href="#about">Example Link 1</a></li>
                                <li><a href="#about">Example Link 2</a></li>
                                <li><a href="#about">Example Link</a></li>
                                <li><a href="#about">Example Link 1</a></li>
                                <li><a href="#about">Example Link 2</a></li>
                            </ul>
                        : null}
                    </li>
                    <li>About us</li>
                    <li>Offer</li>
                    <li>Opinion</li>
                    <li>Contact</li>
                </ul> : null
                }
            </div>
        );
    }
}

export default TopNavigation;
