import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='d-flex justify-content-center gap-4 mt-3'>
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/register-rbs'>Register-RBS</Link>
            <Link to='/register-bs'>RegisterBS</Link>
        </nav>
    );
};

export default Header;