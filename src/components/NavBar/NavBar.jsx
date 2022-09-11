import React from 'react'
import './NavBar.css'

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img id="logo" src="https://user-images.githubusercontent.com/87645745/184291912-c83f0d8a-0f6a-41fd-8b97-ea6bd1d0a463.png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active navLinks" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navLinks" href="about.html">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navLinks" href="gallery.html">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navLinks" href="contact.html">CONTACT US</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
