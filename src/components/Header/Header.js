import React, { Fragment } from 'react'
// import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link className='navbar' href='#posts'>Show Posts</Nav.Link>
    <Nav.Link className='navbar' href="#users">Users</Nav.Link>
    <Nav.Link className='navbar' href='#user-info'>Edit Profile</Nav.Link>
    <Nav.Link className='navbar' href="#change-password">Change Password</Nav.Link>
    <Nav.Link className='navbar' href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link className='navbar' href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link className='navbar' href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link className='navbar' to="/">Home</Nav.Link>
//   </Fragment>
// )

// const headerStyling = {
//   borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
// }

const Header = ({ user }) => (
  <Navbar sticky='top' variant='dark' className='navbarBorder' expand="md">
    <Navbar.Brand className='navbar' href="#">
      DevSpot
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2 navbar">Welcome, {user.firstName}</span>}
        {/* alwaysOptions */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
