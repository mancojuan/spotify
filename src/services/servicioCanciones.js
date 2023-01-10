//receta para consumir un api con react

export async function servicioCancionesTop(){

    //1.pa onde vas y a q vas
    //escribir la url del servicio del api

    const URL = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=US"

    //2. que operacion vas hacer en la base de datos
    // configurar la repeticion de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQC2X89hT6l808oAkSMoH5NesC2Hld8py0vpLa6lauOh3xaKnhqLQdIXmyGGXHIi1pjf3fRwV-hIw3v08rgUdxlh52Fs-aJMA-LU81FBkqXPrJMi_zTCKI8-WM09Ghpjjd8s0KJOBDVrd6WC-L8haJrAAUmAvXoUXN7T7PYOIrhOK8-RbGghcbEHaLx8hzwZMoQ"}

    } 

    //3.nos vamos pal restaurante
    //consumimos el api
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log (canciones)
    
}