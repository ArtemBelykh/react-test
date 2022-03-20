import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React, {Component} from "react";
import Home from "./components/Home/home";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Cloud from "./components/Cloud/cloud";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/cloud" element={<Cloud />}/>
                        <Route path="/" component={Home}/>
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        )
    }
}
