import './Home.css'
import {Footer} from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div class="banner">

                </div>
            </section>
            <section>
                <div class="container my-5">
                    <div class="row">
                        <div class="col-12 col-md-8">
                            <h2>ALCOLIRYKOZ</h2>
                            <p>
                            Alcolirykoz es un grupo de hip hop que nació en el año 2005 en Medellín, Colombia, en el barrio Aranjuez en la comuna 4 de la ciudad. Integrado por los primos y raperos Juan Carlos Fonnegra (aka Gambeta) y Carlos Andrés (aka Kaztro) junto a su vecino y DJ Gustavo Adolfo (Fa-zeta).
                            </p>
                            <img src="http://www.colombiainforma.info/wp-content/uploads/2018/06/28685860_2303855849630802_7509663444856688181_n.jpg" class="img-fluid w-100"></img>
                        </div>

                        <div class="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <h1 class="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Med</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Bog</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div class="row">
                                <div class="col-3 text-end">
                                 <i class="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div class="col-9 text-start align-self-center">
                                    <h3 class="fw-bold">Barr</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-md-4">
                           <img src="https://www.elespectador.com/resizer/08lnOh0paTI0-FukNyFMDgilOVk=/1200x675/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PYAIU7PC7JHOJFPR7NCAZ5KMH4.jpg" alt="" class="img-fluid w-100"/>
                        </div>
                        <div class="col-12 col-md-4">
                           <img src="https://revistadiners.com.co/wp-content/uploads/2019/02/alcolirykoz_800x669.jpg" alt="" class="img-fluid w-100"/>
                        </div>
                        <div class="col-12 col-md-4">
                           <img src="https://www.elespectador.com/resizer/QuptaTWqCO3PYgu61lEmxt2t_CA=/525x350/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/5RCNFEY7XJCWZK5IXWCLI6WGUA.jpg" alt="" class="img-fluid w-100"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}