export async function generarToken(){
    const client_id="client_id=efe65e1c0b6949278e95cbbdc97488a9"
    const client_secret="client_secret=bc12b422d57c4ed49a7daca38c01d64e"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    return(tokenDefinitivo)

}