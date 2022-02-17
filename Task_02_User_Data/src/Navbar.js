import logo from './logo.svg';
import './App.css';
import App from './App';
import mainlogo from './image/mainlogo.png';
import Users from "./Card";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-light bg-info" >
   
  <div className="container-fluid">
     <NavLink className="navbar-brand" to="/" style={{color: "black"}}>
     <h1>Lets Grow More</h1>
     </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink className="nav-link active" aria-current="page" to="/app" style={{color: "black"}} style={{border: "solid red"}}><h3><b>Get Users</b></h3></NavLink>
         </li>
     </ul>    
     </div>
   </div>
 </nav>
       <center><h1><b>Welcome to Lets Grow More</b></h1>
       <h1><b>Task 2 Completed by</b></h1>
       <h1><b>Mandlik Pravin</b></h1></center>
   </>
  );
}

export default Navbar;
