import React from 'react'
import { slide as Menu } from 'react-burger-menu';

import './Sidebardata.css';

const Sidebardata = () => {
    return (
        <div>
            <Menu className="burger">
            <nav className="Navigation-bar">
         <ul>
             <li><a className="nav-link" href="/">Home</a></li>
             <li><a className="nav-link" href="/Order">Order</a></li>
             <li><a className="nav-link" href="/Events">Events</a></li>
             <li><a className="nav-link" href="/Blogs">Blogs</a></li>

         </ul>
         </nav>
            </Menu>
        </div>
    )
}


export default Sidebardata;