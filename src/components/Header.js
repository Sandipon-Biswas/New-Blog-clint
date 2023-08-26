import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../redux/store';

const Header = () => {
  const navigate =useNavigate();
  // global state
  const dispatch=useDispatch();
  const isLogin = useSelector((state) => state.isLogin);
  //logout
  const handleLogOut=()=>{
    try {
      dispatch(authActions.logout());
      alert("Log Out successfuly ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Navbar style={{ backgroundColor: '#2980b9', color: 'white !important' }} expand="lg">
      <Container>
        {/* Company Name */}
        <Link to='/' className='text-light nav-link' href="#">Company Name</Link>

        {/* Toggler for responsive design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {isLogin && (
            <Nav className="mx-auto"> {/* Using mx-auto to center the Nav items */}
              {/* Middle Links */}
              <Link to='/' className='text-light  nav-link' href="#">Blog</Link>
              <Link to='/myblog' className='text-light nav-link' >My Blog</Link>
            </Nav>
          )}

          <Nav style={{ marginLeft: 'auto' }}>  {/* Add ml-auto class here */}
            {/* Right-side Links */}
            {!isLogin && (
              <>
              <Link to='/login' className='text-light nav-link' href="#">Log In</Link>
            <Link to='/registration' className='text-light nav-link' href="#">Registration</Link>
              </>
            )}
            {isLogin && (
            <button onClick={handleLogOut} className='btn btn-secondary' href="#">Logout</button>

            )}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
