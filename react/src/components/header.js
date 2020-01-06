import React from 'react';
import { Navbar, NavbarBrand, Nav , NavItem ,NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import logoutAction from '../actions/logoutAction';
import { useDispatch, useSelector } from 'react-redux';
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

const Header = () => {
  const isLogged = useSelector(state => state.isLoggedIn);
  console.log('isLogged', isLogged)
  const dispatch = useDispatch();

  const logout = () =>{
    dispatch(logoutAction('Logout'));
  }
  return (
    <div>
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Post your Thoughts</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled={!isLogged} href="/addBlog">Add Your Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled={!isLogged} href="/allBlogs">View Blogs</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
           <FontAwesomeIcon icon={faUser} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
            <NavLink  disabled={!isLogged}  href="/settings">Account Settings</NavLink>
            </DropdownItem>
            <DropdownItem>
            <NavLink  disabled={!isLogged}  href="/user/blogs">Your Blogs</NavLink>
            </DropdownItem>
            <DropdownItem>
            <NavLink  disabled={!isLogged}  onClick={ logout } href='/'>Logout</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
  </Navbar>
  </div>
  )
}

export default Header;