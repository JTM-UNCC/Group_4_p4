import React from 'react';
import './Header.css';

/**
 * Define Header, a React component of Project 4, Problem 3.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container Header"><div className="header">Group 4 Project 4</div></div>
        );
    }
}

export default Header;