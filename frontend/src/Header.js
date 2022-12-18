import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header()
{
  let user = JSON.parse(localStorage.getItem('user-info'));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate('/register');
  }
  return (
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Instagram</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {
              localStorage.getItem('user-info') ? 
              <>
            <Link to="/add">Add Product</Link>
            <Link to="/update">Upadte Product</Link>
              </>
              :
              <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              </>
            }
          </Nav>
          {localStorage.getItem('user-info') ?
          <Nav>
            <NavDropdown title={user && user.name }>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          :null

}
      </Navbar>
  );
}

export default Header;