import React from 'react';
import styles from './App.css';
import NavBar from './components/NavBar.js';
import Home from './component/Home.js';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: 'foo'};
    }
    render() {
        return (
            <div>
                <NavBar/>

            </div>
        );
    }
}