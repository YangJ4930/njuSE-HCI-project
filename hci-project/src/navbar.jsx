import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {};

    render() {
        return (
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container'>
                    <Link className='navbar-brand' to='/'>
                        myspace
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link active' aria-current='page' to='/'>
                                    home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>
                                    1
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>
                                    2
                                </Link>
                            </li>

                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    data-bs-toggle='dropdown'
                                    href='#'
                                    role='button'
                                    aria-expanded='false'
                                >
                                    Dropdown
                                </a>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <a href='#scrollspyHeading3'>Third</a>
                                    </li>
                                    <li>
                                        <a href='#scrollspyHeading4'>Fourth</a>
                                    </li>
                                    <li>
                                        <a href='#scrollspyHeading5'>Fifth</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='navbar-nav mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>
                                    注册
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>
                                    登录
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
