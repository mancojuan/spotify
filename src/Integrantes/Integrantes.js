export function  Integrantes(){

let nombre="producto integrantes"

let integrantes=[
    {
        nombre:"GAMBETA",
        edad:"28 años",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/gambeta.jpg?alt=media&token=174281be-1562-4721-8fc3-f5ccd16f1e83",
        descripcion:"Alcolirykoz es un grupo de hip hop que nació en el año 2005 en Medellín, Colombia, en el barrio Aranjuez en la comuna 4 de la ciudad. Integrado por los primos y raperos Juan Carlos Fonnegra (aka Gambeta) y Carlos Andrés (aka Kaztro) junto a su vecino y DJ Gustavo Adolfo (Fa-zeta)."
        
    },
    {
        nombre:"KAZTRO",
        edad:"32 años",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/kastro.jpg?alt=media&token=b0f4ce24-1d02-454a-8e65-022a3a078c5c",
       descripcion:"Alcolirykoz es un grupo de hip hop que nació en el año 2005 en Medellín, Colombia, en el barrio Aranjuez en la comuna 4 de la ciudad. Integrado por los primos y raperos Juan Carlos Fonnegra (aka Gambeta) y Carlos Andrés (aka Kaztro) junto a su vecino y DJ Gustavo Adolfo (Fa-zeta)."
    },
    {
        nombre:"FA_ZETA",
        edad:"29 años",
        foto:"https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/fa-zeta.PNG?alt=media&token=96b2796f-d11d-45eb-a0b8-3b264aa68961",
        descripcion:"Alcolirykoz es un grupo de hip hop que nació en el año 2005 en Medellín, Colombia, en el barrio Aranjuez en la comuna 4 de la ciudad. Integrado por los primos y raperos Juan Carlos Fonnegra (aka Gambeta) y Carlos Andrés (aka Kaztro) junto a su vecino y DJ Gustavo Adolfo (Fa-zeta)."
    }
]

    return(
        <>
        <h1>{nombre}</h1>
        <div className="container">
        <div className="row row-cols-2 row-cols-md-2 g-5">
            {
                integrantes.map(function(integrante){
                    return(
                        <>
                        <div className="col">                       
                            <div className="card h-100 shadow">
                            
                            <img src={integrante.foto} alt="foto className="h-100 img-fluid w-100 mt-2/>
                            </div>
                        
                        </div>
                        <div className="col">                       
                            <div className="card h-100 shadow">
                            <h1 className="text-center mt-1 mark">{integrante.nombre}</h1>
                            <h1 className="text-center mt-1">{integrante.edad}</h1>
                            <h1 className="text-center mt-1">{integrante.descripcion}</h1>

                            </div>
                        
                        </div>
                        </>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}