import React from 'react';
import Menu from './Menu';

const Header = () => {
    return <header className='d-flex justify-content-between'>
        <div>Logo</div>
        <Menu />
    </header>
}

export default Header;