//clase de js que se va a conectar con la api importamos axios

import axios from "axios"

//utilizamos el metodo para poder exportar mas funciones por medio de un metodo fachada
export const obtenerEstudianteFachada=async (cedula)=>{
    return await obtenerEstudianteAPI(cedula);

}  

export  const ingresarEstudianteFachada=(bodyEstudiante)=>{

}  
//estos metodos deben tener relacion con los metodos de la clase controllerRestFuk
export const actualizarEstudianteFachada=(bodyEstudiante,id)=>{


}  

export const eliminarEstudianteFachada=(id)=>{


} 


const obtenerEstudianteAPI=async (cedula)=>{

    const data=await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);

}  

const obtenerEstudianteAPIAxios=(cedula)=>{

}  