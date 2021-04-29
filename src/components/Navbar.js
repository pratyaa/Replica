import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import './static/Navbar.css'

const NavbarComponent=()=>{
    return(
        <Navbar className="px-5" style={{ boxShadow: "0.5px 0.5px #D3D3D3"}}collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand className="px-5 ml-5"href="#home" style={{fontWeight:500}}>Brilliant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="px-4 inactive" href="#features">Today</Nav.Link>
            <Nav.Link className="px-4 active" href="#pricing">Courses</Nav.Link>
            <Nav.Link className="px-4 inactive" href="#pricing">Practice</Nav.Link>
            </Nav>
            <Nav>
            <Button className="px-5 mx-4" variant="outline-primary" >Log In</Button>
            <Button className="px-5 mx-4">Sign Up</Button>
            </Nav>
        </Navbar.Collapse>
</Navbar>
        )
}

export default NavbarComponent