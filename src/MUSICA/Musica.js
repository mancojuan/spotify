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
                <h2></h2>
            </>
        )

    }else{

        return(
            <>
                <h2 className="text-center mt-2">SONGS ALCOLIRYKOZ</h2>
                <div className="container"> 
                            <div className="row row-cols-1 row-cols-md-5 g-1 mt-2"> 
               
                        {
                            canciones.tracks.map(function(cancion){
                                return(
                                    <div className="cols">
                                    <div className="card  shadow caja mt-3">
                                            <div>
                                            
                                                 <img src={cancion.album.images[0].url} className="imagen"></img>
                                                 <h1 className="text-center letra ">{cancion.name}</h1>                                                
                                                 <audio controls src={cancion.preview_url} className="audio"></audio>
                                                 <h3 className="text-center fs-5">   popularidad : {cancion.popularity}</h3>

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