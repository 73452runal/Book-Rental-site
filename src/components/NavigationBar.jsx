
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Search } from "./Search";

export function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className="MyNavbar">
            <Container fluid>
                <Navbar.Brand style={{ fontSize: "2rem" }}>Kita<span><i className="fas fa-book-open"></i></span>Bish</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Col lg={4} md={4} xs={6}> 
                        <Search />
                    </Col>
                    <Nav>
                        <LinkContainer to='/aboutus'>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/userlist'>
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/register'>
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
