import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

const Navbar = (user) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >HiThere</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/users'>All Users</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" exact to='/todo'>Todo</NavLink>
                </li>
                </ul>              
            </div>
        </nav>
    );
}



export default Navbar


