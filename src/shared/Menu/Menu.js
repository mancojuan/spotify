import { Link } from "react-router-dom"
import './Menu.css'
export function Menu(){


    return(

        <nav class="navbar navbar-expand-lg menu navbar-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">ALCOLIRYKOZ</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <Link class="nav-link " aria-current="page" to="/">HOME</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="historia">HISTORIA</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="integrantes">INTEGRANTES</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="musica">MUSICA</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="albumes">ALBUMES</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="mercancia">MERCANCIA</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>

    )

}