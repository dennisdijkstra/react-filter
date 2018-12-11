import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.css';

const Header = () => (
    <div className={s.content}>
        <Link to="/">
            <h1 className={s.title}>Cooper Hewitt Typography Objects</h1>
        </Link>
        <Link to="/login">
            <p className={s.link}>Login</p>
        </Link>
    </div>
);

export default Header;
