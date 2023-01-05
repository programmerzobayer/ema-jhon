import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='head' >
           <div className="header">
           <img src={logo} alt="" />
           </div>
           <nav>
            <a href="/shop">Shop</a>
            <a href="/activity">Activity</a>
            <a href="/manage">Manage</a>
            </nav>
        </div>
    );
};

export default Header;