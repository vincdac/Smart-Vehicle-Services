import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import CRegistation from './components/CRegistation';
import ARegistation from './components/ARegistation';
import ListAdmin from './components/ListAdmin';
import ListCustomers from './components/ListCustomers';
import Login from './components/Login';
import Vehiclereg from './components/Vehiclereg';
import Home from './components/Home';
import About from './components/About';
import FooterComponent from './components/FooterComponent';
import Vehicleslist from './components/Vehicleslist';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Smart Vehicle Service</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">Product And Service</Nav.Link>
              <Nav.Link as={Link} to="/Registation">Register</Nav.Link>
              <Nav.Link as={Link} to="/Vehiclereg">Vehicle Registation</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              <Nav.Link as={Link} to="/Admin">Admin</Nav.Link>
              <Nav.Link as={Link} to="/ListCustomers">Customer List</Nav.Link>
              {/* <Nav.Link as={Link} to="/ListEmployeeComponent">Employee List</Nav.Link> */}
              <Nav.Link as={Link} to="/ListAdmin">Admin List</Nav.Link>
              <Nav.Link as={Link} to="/Vehiclelist">Vehicle List</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Registation" element={<CRegistation />} />
            <Route path="/Admin" element={<ARegistation />} />
            <Route path="/ListAdmin" element={<ListAdmin />} />
            <Route path="/ListEmployeeComponent" element={<ListEmployeeComponent />} />
            <Route path="/ListCustomers" element={<ListCustomers />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Vehiclereg" element={<Vehiclereg />} />
            <Route path="/About" element={<About />} />
            <Route path="/Vehiclelist" element={<Vehicleslist />} />
          </Routes>
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
export default App;
