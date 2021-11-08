import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">TextAnalyzer</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/text">Text-Analyzer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/math">Math-Game</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/guess">Guess-Game</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pups
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="my-dogs">See random Pups</Link></li>
                                <li><Link className="dropdown-item" to="/my-dogs/likes">Your Likes</Link></li>
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                            </ul>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class ="btn btn-success" type ="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
