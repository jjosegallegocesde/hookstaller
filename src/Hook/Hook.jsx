import { useState,useEffect } from "react"
import './Estilo.css'
export function Hook(){

    const[cuenta,setCuenta]=useState(0)
    const[estado,setEstado]=useState(false)

    function incrementar(){
        setCuenta(cuenta+1)
    }

    useEffect(function(){
        console.log("cambio de estado")
        if(cuenta>10){
            setEstado(true)
        }else{
            setEstado(false)
        }
    },[cuenta])

    return(
        <>
           <button type="button" onClick={incrementar}>clic</button>
           <h2>Cuenta: {cuenta}</h2>
           {

                estado==false?<p></p>:<p>ALCANZADO EL LIMITE</p>

           } 
        </>
    )

}