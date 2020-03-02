import React    from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';


class Navigation extends React.Component {

  render() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="primary">
  <Navbar.Brand href="#home">ShoeZone</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Our Recomended</Nav.Link>
      <Nav.Link href="#pricing">Top Shoes of 2019</Nav.Link>
      <NavDropdown title="Shoes" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Fashion</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sports</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Clearance</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Check out our Blog</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Sign Up</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Login
      </Nav.Link>
    </Nav>

    <Nav>
    <StripeCheckout
        stripeKey="pk_test_K4t1XqfFh7Sa131jDVFzKmJz00JhNtdPEt"
        token={this.onToken}
      />
    
   
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }

}

export default Navigation;