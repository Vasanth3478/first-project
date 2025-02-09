import React from 'react';
import { NavLink } from 'react-router';
import '../AboutUs/about.scss'

const AboutUs = () => {
    return <nav className='nav-m'>

        <div className='nav-items'>
            <NavLink className="remove" to="/signup" end>
                <div className="sign-btn">
                    Signup
                </div>
            </NavLink>
            <NavLink to="/login" end>
                <div className="login-btn">

                    Login

                </div>
            </NavLink>
        </div>

    </nav>
}

export default AboutUs;