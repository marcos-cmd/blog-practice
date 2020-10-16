import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles List</Link>
            </li>
            <li>
                <Link to="/article">Article</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
