import React from 'react';
import { NavLink } from 'react-router';

const Menu = () => {
    return <nav>
        <NavLink to="/" end>
            Home
        </NavLink>
        <NavLink to="/services" end>
            Services
        </NavLink>
        <NavLink to="/contact-us" end>
            ContactUs
        </NavLink>
        <NavLink to="/about-us" end>
            AboutUs
        </NavLink>
    </nav>
}

export default Menu;