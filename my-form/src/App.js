import CustomerList from './components/CustomerList';
import {Nav, Navbar, Container, Row, Col, NavbarBrand} from 'reactstrap';
import "./header.scss";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
function App() {
  return (
        <div className="App">
          <Router>
            <div className="header">
              <Link to="/AddCustomer" className="link">Create Customer</Link>
              <Link to="/CustomerList" className="link">List of Customers</Link>
            </div>
            <Routes>
              <Route exact path="/" element={<AddCustomer/>}/>
              <Route exact path="/addCustomer" element={<AddCustomer/>}/>
              <Route path="/editCustomer/:id" element={<EditCustomer/>}/>
              <Route path="/customerList" element={<CustomerList/>}/>
            </Routes>
          </Router>
        </div>
  );
}

export default App;
