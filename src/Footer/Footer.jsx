import React, { Component } from 'react';
import classes from './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>
                <div className={classes.Footer_section_one}>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                </div>
                <div className={classes.Footer_section_two}>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                </div>
                <div className={classes.Footer_section_three}>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                </div>
            </div>
        );
    }
}

export default Footer;
