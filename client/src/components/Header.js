import React from 'react'
import './api/list1.css'
import {Link} from 'react-router-dom';

export default function Header() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                <Link className="navbar-brand mx-5" to="/"><h5>Innovation</h5></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <div className="linkDiv">                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/text">Text-Analyzer</Link>
                            </li>
                        </div>

                        <div className="linkDiv">
                            <li className="nav-item">
                                <Link className="nav-link" to="/math">Math-Game</Link>
                            </li>
                        </div>

                        <div className="linkDiv">
                            <li className="nav-item">
                                <Link className="nav-link" to="/guess">Guess-Game</Link>
                            </li>
                        </div>

                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pups
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/my-dogs">See random Pups</Link></li>
                                <li><Link className="dropdown-item" to="/my-dogs/likes">Your Likes</Link></li>
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                            </ul>
                        </li>
                        
                    </ul>

                     <Link className="btn btn-success" to="/login">Login</Link>
                   
                </div>
            </div>
        </nav>
    )
}
