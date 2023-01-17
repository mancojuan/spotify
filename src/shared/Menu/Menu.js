import { Link } from "react-router-dom"
import './Menu.css'
export function Menu(){


    return(

        <nav className="navbar navbar-expand-lg menu navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ALCOLIRYKOZ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="historia">HISTORIA</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="integrantes">INTEGRANTES</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="musica">MUSICA</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="mercancia">MERCANCIA</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>

    )

}