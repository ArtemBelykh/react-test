import React, {Component} from "react";
import styles from './css/Header.module.css'
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return(
                <header className={styles.header}>
                    <ul className={styles.nav}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/docs">Docs</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/cloud">Cloud</Link></li>
                        <li><Link to="/social">Social</Link></li>
                    </ul>
                </header>
        )
    }
}
