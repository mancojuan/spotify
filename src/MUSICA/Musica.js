import { servicioCancionesTop } from "../services/servicioCanciones"

export function  Musica(){

    servicioCancionesTop()

    return(
        <>
        <h1>cargando musica</h1>
        </>
    )
}