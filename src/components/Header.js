import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header">
        <Link to="/">
            <h1 className="header-title">Cooper Hewitt Typography Objects</h1>
        </Link>
        <Link to="/login">
            <p className="header-link">Login</p>
        </Link>
    </div>
);

export default Header;
