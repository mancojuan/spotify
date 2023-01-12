import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"


export function Mercancia (){

    //activamos la navegacion entre componentes cuando se de un evento

    let navegante=useNavigate()


    //que hago si se da el evento
    function detectarEvento(productoSeleccionado){
        console.log(productoSeleccionado)

        navegante('/tienda',{
            state:{productoSeleccionado}
        })
    }

    let titulo="productos de la banda"

    let productos=[
        {
            nombre:"BOLSO ORIGINAL",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/bolso.jpg?alt=media&token=9624ae53-b03e-402b-9571-c0e21c93c768",
            precio:"$ 300.000",
            descripcion:"Bolso Impermeable de Ordenador Portátil Mochila de Viaje a Aire Libre de Cargador Hecho de material de calidad, la mochila es resistente al desgaste y al agua Gran capacidad, con compartimentos separados y múltiples bolsillos interiores. Cinturón de respaldo y cinturones, cómodo, transpirable y proporciona a la bolsa una gran capacidad de carga Práctico diseño de carga USB en el lado de la bolsa, cargue sus dispositivos electrónicos cuando y donde Equipado. en la oscuridad"
        },
        {
            nombre:"BUSO ORIGINAL",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/busos.jpg?alt=media&token=609db8b3-e592-4672-adfe-fe81985c0e17",
            precio:"$ 180.000",
            descripcion:"Buzo elaborado en algodón perchado, de suave textura, estilo moderno con capucha de cordón ajustable, amplio bolsillo delantero.Si lo prefiere con estampado echa un vistazo en nuestro eshops"
        },
        {
            nombre:"CAMISA TRIPLE A",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/camisas.jpg?alt=media&token=0bee1f10-9f6d-4bda-99fe-ee160b3e6ed7",
            precio:"$ 150.000",
            descripcion:"Las tallas exhibidas son tallas colombianas. asegúrate de escoger la correcta en la guía de tallas en donde encontrarás la talla americana y la medida en centímetros de pie correspondiente para esa talla Adidas M Hldy Lghts T Camiseta Manga Corta blanco de hombre lifestyle"
        },
        {
            nombre:"CD PREMIUM",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/disc.jpg?alt=media&token=11e2268c-8e71-47a6-9d7f-0b16dde19763",
            precio:"$ 80.000",
            descripcion:"Último Album de $alcolirykoz$ lanzado el 13 de Agosto 2021, a través de G*59 Records. Genero: HIP HOP"
        },
        {
            nombre:"FORRO CEL",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/forro.webp?alt=media&token=cf7246b2-bd18-4cb3-b0a4-9a5aed132511",
            precio:"$ 50.000",
            descripcion:"ESTUCHE PROTECTOR RIGIDO ANTIGOLPES CLEAR SPACE = Siempre dispuestos a dar la mejor accesoria y la mejor calidad en nuestros productos para cada uno de nuestros clientes por ello antes de compra ten muy en cuenta"
        },
        {
            nombre:"POSTER",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/poster.jpg?alt=media&token=c868166b-b31f-436f-9747-5f3672439689",
            precio:"$ 55.000",
            descripcion:"Decora tu sala, alcoba, hall u oficina, con este impresionante cuadro tríptico modernista. Las imágenes de este cuadro, reposan sobre tres bases sólidas y llamativas de 9 milímetros cada una, dándole un aspecto único que, a la vez, resalta la imagen en cualquier lugar que lo instales. Viene con todos los materiales necesarios para su instalación e instrucciones para hacerlo, ¡es muy sencillo! Personaliza cualquier ambiente de tu casa, oficina o local comercial, con las imágenes que más te gustan y al mejor precio. ¿Te identificas con un superhéroe, animal, lugar o equipo de futbol? ¡Haz que todos lo sepan y sorpréndelos con tu elección! Instalación A la hora de instalarlo, solo necesitarás el clavo que ha estado estorbando en tu pared y si no lo tienes, te enviamos todos los materiales para que lo hagas, con una herramienta será suficiente, idealmente un taladro."
        },

    ]
    return(
        <>
        <h1>{titulo}</h1>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-5">

                {
                    productos.map(function(producto,id){
                        return(
                            <div key={id}>
                            
                                <div className="col">
                                    <div className="card h-100 shadow ">
                                        
                                        <h1 className="text-center mt-1 ">{producto.nombre}</h1>
                                        <img src={producto.foto} alt="foto" className="  "/>
                                        <h1 className="text-center mt-1 mark">{producto.precio}</h1>

                                        <button className="btn btn-primary mx-5 my-3" onClick={
                                            function(){
                                                detectarEvento(producto)
                                            }
                                        }>AMPLIAR</button>
                                       
                                    </div>
                                </div>
                            </div>
                        )
                       
                    })
                }

            </div>
        </div>
        <Footer/>
        </>
    
    )
        
}