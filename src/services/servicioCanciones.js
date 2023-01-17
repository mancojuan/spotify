import { generarToken } from "./servicioToken"
export async function servicioCancionesTop(){

    let token=await generarToken()

    //receta para consumir un api con react

    //1.pa onde vas y a q vas
    //escribir la url del servicio del api

    const URL = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=US"

    //2. que operacion vas hacer en la base de datos
    // configurar la repeticion de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:token}

    } 

    //3.nos vamos pal restaurante
    //consumimos el api
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones 
    
}