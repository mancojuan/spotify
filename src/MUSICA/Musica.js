import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
import './musica.css'


export function  Musica(){

    //usando el hook useState para almacenar la respuesta del api de forma global

    const [canciones,setCanciones]=useState(null)
    const[estadocarga,setEstadoCarga]=useState(true)
    //usando useEffect para limitar el consumo del api a una sola vez

    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })

    },[])

    //render del componenete:

    if(estadocarga==true){
        
        return(
            <>
                <h2>estamos cargando las canciones </h2>
            </>
        )

    }else{

        return(
            <>
                <h2>canciones de la banda</h2>
                <div className="container"> 
                            <div className="row row-cols-1 row-cols-md-5 g-1 mt-2"> 
               
                        {
                            canciones.tracks.map(function(cancion){
                                return(
                                    <div className="cols">
                                    <div className="card  shadow caja">
                                            <div>
                                            <h1 className="text-center mt-1 ">{cancion.name}</h1>
                                                 <img src={cancion.album.images[0].url} className="h-100 img-fluid w-100 mt-1"></img>                                                
                                                 <audio controls src={cancion.preview_url} className="audio"></audio>

                                            </div>
                                            </div>
                                            </div>
                           
                            
                                         )
                    })
                        }
                 </div>
                         </div>
            </>
        )
    }

    return(
        <>
        <h1>cargando musica</h1>
        </>
    )
}