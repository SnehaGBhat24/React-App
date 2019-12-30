import React from 'react';
import { Navbar, NavbarBrand, Nav , NavItem ,NavLink, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import logoutAction from '../actions/logoutAction';
import { useDispatch } from 'react-redux';
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

const Header = () => {
  const dispatch = useDispatch();
  // let [ showToggle, setshowToggle] = useState(true);
  // const onToggle = () => setshowToggle({
  //   showToggle: !showToggle,
  // })
  const logout = () =>{
    dispatch(logoutAction('Logout'));
  }
  return (
    <div>
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Icream Store</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/addBlog">Add Your Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/allBlogs">View Blogs</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
           <FontAwesomeIcon icon={faUser} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
            <NavLink href="/settings">Account Settings</NavLink>
            <NavLink href="/user/blogs">Your Blogs</NavLink>
            <NavLink onClick={ logout } href='/'>Logout</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/* <NavItem>
          <NavLink>
          <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </NavItem> */}
      </Nav>
  </Navbar>
  </div>
  )
}
// class Header extends React.Component{
//   constructor(){
//     super();
//     this.onToggle = this.onToggle.bind(this);
//     this.state = {
//       showToggle : true,
//     }
//   }
//   onToggle(){
//     this.setState({showToggle: !this.state.showToggle})
//   }
//   render(){
//       return (
//         <div>
//         <Navbar color="light" light expand="md">
//         <NavbarBrand href="/">Icream Store</NavbarBrand>
//         <NavbarToggler onClick={this.onToggle} />
//         <Collapse isOpen={this.state.showToggle} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/">Home</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/addBlog">Add Your Blog</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                <FontAwesomeIcon icon={faUser} />
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                 <NavLink href="/settings">Account Settings</NavLink>
//                 <NavLink href="/user/blogs">Your Blogs</NavLink>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//             {/* <NavItem>
//               <NavLink>
//               <FontAwesomeIcon icon={faUser} />
//               </NavLink>
//             </NavItem> */}
//           </Nav>
//         </Collapse>
//       </Navbar>
//       </div>
//       )
//   }
// }

export default Header;