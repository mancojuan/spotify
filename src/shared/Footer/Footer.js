import './Footer.css'

export function Footer(){

    return(
        <footer>
            <div className="container-fluid">
                <div className="row p-5  pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://alcolirykoz.com/wp-content/themes/az/assets/dist/images/logohoddie.png" alt="foto" className="img-fluid w-50"/>
                    </div>
                    <div className="col-12 col-md-4 text-center text-white">
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4>RAP</h4>
                        <br></br>
                        <h2 className="fw-bold">SOBRE LA BANDA</h2>
                        <h4>RAP</h4>
                    </div>
                    <div className="col-12 col-md-4 text-center text-white">
                    <i className="bi bi-instagram fuente me-4"></i> 
                    <i className="bi bi-twitter fuente me-4"></i>
                    <i className="bi bi-facebook fuente me-4"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}