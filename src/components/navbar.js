import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3 className="navbar-brand">My-Store</h3>
                <ul className="navbar-nav mr-auto">
                    <Link to="/">
                        <li className="nav-item active nav-link" >Products</li>
                    </Link>
                    <Link to="/cart">
                        <li className="nav-item active nav-link" >Cart</li>
                    </Link>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar