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
                    <di class="row">
                        <h1>NOTICIAS</h1>
                        <hr/>
                    </di>
                    <div class="row">
                        <div class="col-12 col-md-4 text-center">
                           <img src="https://www.elespectador.com/resizer/08lnOh0paTI0-FukNyFMDgilOVk=/1200x675/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/PYAIU7PC7JHOJFPR7NCAZ5KMH4.jpg" alt="" class="img-fluid w-80"/>
                           <p>La historia de Alcolirykoz empieza en Aranjuez, con sus abuelos, cuando decidieron, como tantas familias en Colombia, dejar el campo para establecerse en la ciudad –unos impulsados por la idea de progreso; otros, obligados por la violencia–. Ahí, en Medellín, empieza esta historia, y la de su séptimo disco, Aranjuez (2021), y la de su barrio, donde se puede leer parte de la historia de Colombia, sus alegrías y sus tragedias.</p>
                        </div>
                        <div class="col-12 col-md-4  text-center">
                           <img src="https://revistadiners.com.co/wp-content/uploads/2019/02/alcolirykoz_800x669.jpg" alt="" class="img-fluid w-80"/>
                           <p>Son tres: Gambeta, Fazeta y Kaztro. Vienen de Aranjuez, un barrio duro de Medellín, y desde ‘pelaos’ entendieron que el rap era el camino que querían seguir. Hace más de 10 años vienen dándole y dándole, como canta en El show debe continuar, y se han convertido en una de las agrupaciones más reconocidas de la escena del hip hop y el rap colombiano.</p>
                        </div>
                        <div class="col-12 col-md-4  text-center">
                           <img src="https://www.elespectador.com/resizer/QuptaTWqCO3PYgu61lEmxt2t_CA=/525x350/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/5RCNFEY7XJCWZK5IXWCLI6WGUA.jpg" alt="" class="img-fluid w-80"/>
                           <p>Ellos todo lo convierten en rap. En la canción “Házmelo rap”, Juan Fonnegra (Gambeta) recuerda que la cumbia y el tango pasaron por la alquimia de los Alcolirykoz. En “La típica”, Gustavo Adolfo (Fa-Zeta), el DJ de la agrupación de Medellín, hizo que el intro de “Cariñito” —himno de diciembre que canta Rodolfo Aicardi— vibrara acompasado con los sonidos del bombo y la caja. En “Todo lo bueno tarda”, Carlos Andrés Fonnegra (Kaztro), bajo el manto nostálgico de un soul rapero, insiste en que una cosa es descansar y otra es hacer pereza, que la muerte pasa como un bólido, que a cada día le llega su hora y que por eso es incumplido.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}