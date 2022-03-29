import './NavBar.css';
import {Nav, Navbar, Container} from "react-bootstrap";



const NavBar  = () => {
 return(
    <Navbar bg="light" expand="lg">
    <Container>
        ¡Tu verduleria amiga! 
    <Navbar.Brand href="#home">
      <img
        src="https://magazine.medlineplus.gov/images/uploads/main_images/eat-fruit-and-vegetables.jpg"
        width="200"
        height="100"
        className="d-inline-block align-top"
        alt="Tu Verduleria Amiga"
      
      />
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="Verduras">Verduras</Nav.Link>
          <Nav.Link href="Frutas">Frutas</Nav.Link>
          <Nav.Link href="Promos">Promos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
 )   
}

export default NavBar
