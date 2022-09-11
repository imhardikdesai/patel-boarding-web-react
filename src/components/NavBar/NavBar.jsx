import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="index.html">
                    <img id="logo" src="https://user-images.githubusercontent.com/87645745/184291912-c83f0d8a-0f6a-41fd-8b97-ea6bd1d0a463.png" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active navLinks" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navLinks" to="/aboutpage">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navLinks" to="/gallerypage">GALLERY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navLinks" to="/contactpage">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
