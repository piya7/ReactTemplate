import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Item style={{marginRight:"10px"}}>
            <Link to="/">HOME</Link>
          </Nav.Item>
          <Nav.Item  style={{marginRight:"10px"}}>
            <Link to="#link">LANDING</Link>
          </Nav.Item>
          <Nav.Item  style={{marginRight:"10px"}}>
            <Link to="#link">ABOUT</Link>
            </Nav.Item>
            <Nav.Item  style={{marginRight:"10px"}}>
            <Link to="/AllMenu">MENU</Link>
            </Nav.Item>
            <Nav.Item  style={{marginRight:"10px"}}>
            <Link to="#link">TEAM</Link>
            </Nav.Item>
            <Nav.Item  style={{marginRight:"10px"}}>
            <Link to="#link">CONTACT</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;