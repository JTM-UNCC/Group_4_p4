import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';

ReactDOM.render(
    <Header/>,
    document.getElementById('reactappHeader')
);

ReactDOM.render(
    <HashRouter>
        <div className="container">
            <div className="menu"><Link to="/example">Example</Link></div>
            <div className="menu"><Link to="/states">States</Link></div>
        </div>
        <Route path="/states" component={States} />
        <Route path="/example" component={Example} />
    </HashRouter>,
    document.getElementById('reactapp')
);

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//
//     render() {
//         return (
//             <div className="container">
//                 <button onClick={this.handleClick}>
//                     {this.state.isToggleOn ? 'Switch to States' : 'Switch to Example'}
//                 </button>
//                 <hr />
//                 {this.state.isToggleOn ? <Example /> : <States />}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('reactapp')
// );