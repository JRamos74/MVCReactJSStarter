import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppLayout extends Component {
    render() {
        return (
            <div>
                <header className="App App-header">
                    <h1 className="App-title">MVC ReactJS Starter</h1>
                </header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        Demo
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">
                                Home
                            </Link>
                            <Link to="/about" className="nav-item nav-link">
                                About
                            </Link>
                            
                        </div>
                    </div>
                </nav>

                <div className="App-intro">
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};

export default AppLayout;