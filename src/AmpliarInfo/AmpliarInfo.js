import './AmpliarInfo.css'
import { useLocation } from "react-router-dom"

export function AmpliarInfo(){

    let datosrecibidos=useLocation()

    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-5 ">                      
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold mark">{producto.nombre}</h2>
                        <h1 className="mt-3 display">{producto.precio}    <span className="descuento">20% off</span></h1>
                        <br></br>
                        <span class="badge text-bg-warning">descuento solo x hoy</span>
                        <p className='fw-bold'>hasta 48 cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/visa%20(1).png?alt=media&token=bb6ded2c-4717-4293-b743-561621c30f05" alt='visa' className='img-fluid '/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-alcolirykoz-a8b7c.appspot.com/o/american-express%20(1).png?alt=media&token=d90eef2e-9881-44a2-86e0-1c6e8365d53c" alt='america express' className='img-fluid ms-1'/>
                        <br></br>

                        <i class="bi bi-truck mt-5 fs-1 ">
                            <span className="text-success text-bold fuente " > Envio gratis a nivel nacional</span></i>
                        <p className='fw-bold'>Conoce los tiempos y las formas de envio</p>

                        <i class="bi bi-arrow-clockwise devolucion "><span className="text-success text-bold fuente "> Devolucion gratis</span></i>
                        <p className='fw-bold'>30 dias para reembolsos</p>

                        <h4 className='fw-bold'>DESCRIPCION</h4>
                        <h2 className='descripcion'>{producto.descripcion}</h2>

                    </div>
                </div>
            </div>
        </>
    )
        
    
}