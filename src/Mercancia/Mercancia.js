import { Footer } from "../shared/Footer/Footer"

export function Mercancia (){

    let titulo="productos de la banda"

    let productos=[
        {
            nombre:"BOLSO ORIGINAL",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/bolso.jpg?alt=media&token=9624ae53-b03e-402b-9571-c0e21c93c768",
            precio:"$ 300.000"
        },
        {
            nombre:"BUSO ORIGINAL",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/busos.jpg?alt=media&token=609db8b3-e592-4672-adfe-fe81985c0e17",
            precio:"$ 180.000"
        },
        {
            nombre:"CAMISA TRIPLE A",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/camisas.jpg?alt=media&token=0bee1f10-9f6d-4bda-99fe-ee160b3e6ed7",
            precio:"$ 150.000"
        },
        {
            nombre:"CD PREMIUM",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/disc.jpg?alt=media&token=11e2268c-8e71-47a6-9d7f-0b16dde19763",
            precio:"$ 80.000"
        },
        {
            nombre:"FORRO CEL",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/forro.webp?alt=media&token=cf7246b2-bd18-4cb3-b0a4-9a5aed132511",
            precio:"$ 50.000"
        },
        {
            nombre:"POSTER",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/poster.jpg?alt=media&token=c868166b-b31f-436f-9747-5f3672439689",
            precio:"$ 55.000"
        },

    ]
    return(
        <>
        <h1>{titulo}</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-5">

                {
                    productos.map(function(producto){
                        return(
                            <>
                                <div class="col">
                                    <div class="card h-100 shadow">
                                        <h1 class="text-center mt-1 mark">{producto.nombre}</h1>
                                        <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100 mt-2"/>
                                        <h1 class="text-center mt-1">{producto.precio}</h1>
                                       
                                    </div>
                                </div>
                            </>
                        )
                       
                    })
                }

            </div>
        </div>
        <Footer/>
        </>
    
    )
        
}