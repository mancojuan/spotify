
export async function servicioCancionesTop(){
    //receta para consumir un api con react

    //1.pa onde vas y a q vas
    //escribir la url del servicio del api

    const URL = "https://api.spotify.com/v1/artists/3ygJTpJJIK7eEeC2EFRl9D/top-tracks?market=US"

    //2. que operacion vas hacer en la base de datos
    // configurar la repeticion de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQDd_HOdlh9BJt8DnFIJBic1mLkFL4x58ljE-QPcGNFW6vN2Ku_IKfdEc6aFhowh04i3sHTa_2KpDf-_UqiJKr_2t36jsSIYyhUf3ThEpZu5hSphphCAgEhmunRhEyPFcGzsosa-l6PTOs_emn3CpAKha602Qo8nT_ei1lveRQ-N_ssgpkI3WptIWcNNR5vhkLU"}

    } 

    //3.nos vamos pal restaurante
    //consumimos el api
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones 
    
}