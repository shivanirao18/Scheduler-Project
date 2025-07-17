import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-primary" to="/">ChronoCom</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/procedure">Procedure</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/sendmssg">Schedule Message</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
