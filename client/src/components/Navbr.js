import React,{useState} from 'react';
import { Collapse, Navbar,  NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';
import {Link} from 'react-router-dom';

const Navbr=()=>{
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

return(

<Navbar color="dark" light expand="md" fixed="top">
        <NavbarBrand  style={{color: 'white'}} > 
            <Link to="/" >Sticky Notes</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color: 'white'}}><Link to="/">My Notes</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color: 'white'}}><Link to="/bin">Trash</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink  style={{color: 'white'}}><Link to="/">My Notes</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>




  //   <nav>
  //   <div className="nav-wrapper ">
  //     <a href="#" className="brand-logo ">StickMe</a>
  //     <ul id="nav-mobile" className="right">
  //       <li><a href="#">My sticks</a></li>
  //       <li><a href="#">Bin</a></li>
  //       <li><a href="#">Logout</a></li> 
  //     </ul>
  //   </div>
  // </nav>
)
}
export default Navbr