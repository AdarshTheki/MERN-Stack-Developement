import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import Logout from '../auth/Logout';
import Register from '../auth/Register';
import Login from '../auth/LogIn';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const toggle = () => setIsOpen(!isOpen);

    const authLinks = (
        <Fragment>
            <NavItem>
                <span className='navbar-text mr-3'>
                    <strong>{user ? `Welcome ${user?.name}` : ''}</strong>
                </span>
            </NavItem>
            <NavItem>
                <NavLink to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/cart'>Cart</NavLink>
            </NavItem>
            <NavItem className='mr-2'>
                <NavLink to='/orders'>Orders</NavLink>
            </NavItem>
            <NavItem>
                <Logout />
            </NavItem>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <NavItem>
                <Register isAuthenticated={isAuthenticated} />
            </NavItem>
            <NavItem>
                <Login isAuthenticated={isAuthenticated} />
            </NavItem>
        </Fragment>
    );

    return (
        <div>
            <Navbar color='dark' dark expand='sm' className='mb-5'>
                <Container>
                    <NavbarBrand to='/'>E Commerce Store</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavbar;
