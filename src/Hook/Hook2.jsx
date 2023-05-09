
import './Estilo.css'
import { useState,useEffect } from "react"


export function Hook2(){

    const[carga,setCarga]=useState(true)
    const[tiempo,setTiempo]=useState(0)

    useEffect(function(){
        tiempo>0?setCarga(false):setCarga(true)
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)
    },5000)
    

    if(carga){
        return(
            <>
                <div className='container fondo'>
                   <div className="row justify-content-center">
                    <div className="col-12">
                        <img src="../../src/assets/img/gifcarga2.gif" alt="" className='img-fluid mx-auto d-block'/>
                    </div>
                   </div>
                </div>
                
            </>
        )

    }else{
        return(
            <>
                <h1>ya cargo...</h1>
            </>
        )
    }

}