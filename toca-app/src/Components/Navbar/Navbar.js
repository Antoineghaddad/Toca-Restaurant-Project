import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';









const Navbar = () => {
    return (
     <div>
        
         <nav className="Navigation-bar">
         <ul>
             <li><Link className="nav-link" to="/">Home</Link></li>
             <li><Link className="nav-link" to="/Order">Order</Link></li>
             <li><Link className="nav-link" to="/Events">Events</Link></li>
             <li><Link className="nav-link" to="/Blogs">Blogs</Link></li>
  
         </ul>
         </nav>
        
     </div>
    )
}

export default Navbar;