import React from 'react';
import Logo from '../assets/logo.png';
import { FaSearch, FaBars } from 'react-icons/fa';

function Header() {
    return (
        <header className="header">
                <div className="menu-container">
                    <FaBars className="menu-icon" />
                </div>
                <img className="logo" src={Logo} alt="Descrição da imagem" />
                <FaSearch className="search-icon" />

        </header>
    );
}

export default Header;
