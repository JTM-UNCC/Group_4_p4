import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';

ReactDOM.render(
    <Header/>,
    document.getElementById('reactappHeader')
);

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Switch to States' : 'Switch to Example'}
                </button>
                <hr />
                {this.state.isToggleOn ? <Example /> : <States />}
            </div>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('reactapp')
);