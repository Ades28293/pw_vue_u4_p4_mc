//clase de js que se va a conectar con la api importamos axios

import axios from "axios"

//utilizamos el metodo para poder exportar mas funciones por medio de un metodo fachada
export const obtenerEstudianteFachada=async (cedula)=>{
    console.log('Axios');
    return await obtenerEstudianteAPIAxios(cedula);

}  

export  const ingresarEstudianteFachada=(bodyEstudiante)=>{
    ingresarEstudiante(bodyEstudiante);
}  
//estos metodos deben tener relacion con los metodos de la clase controllerRestFuk
export const actualizarEstudianteFachada=(bodyEstudiante,id)=>{

    actualizarEstudiante(bodyEstudiante,id);
}  

export const eliminarEstudianteFachada=(id)=>{
    eliminarEstudiante(id);
} 


const obtenerEstudianteAPI=async (cedula)=>{

    const data=await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r=>r.json());
    console.log(data);
    return data;
}  

const obtenerEstudianteAPIAxios=async(cedula)=>{
//axios.tipoDeVerbo(urlApi)
//data es como un atributo no como metodo
//axios ya tieme el await implicito ,por eso no se le pone 
console.log('Axios 2');

//En el config vamos a enviar todos los datos de cabecera uno de esos es el Authorizacion en el cliente Jv Script 
//se declara como json-
const headers={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkyNzQ5NTQyLCJleHAiOjE2OTI3NTAxNDJ9.Jm1jALXk7WAZJZHcpu2NeJIhbCRYWEe5IEA4lZdHUtYj_3aWYsOkT2_ZnNsJZQV4ypaA7Pq0xXGpKwAtTEkQ3A",
    "Mensaje":"Valor1"
}   
const data= axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r=>r.data);

console.log(data);
return data;

}  

  const ingresarEstudiante=(bodyEstudiante)=>{
    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkyNzQ5NTQyLCJleHAiOjE2OTI3NTAxNDJ9.Jm1jALXk7WAZJZHcpu2NeJIhbCRYWEe5IEA4lZdHUtYj_3aWYsOkT2_ZnNsJZQV4ypaA7Pq0xXGpKwAtTEkQ3A",
        "Mensaje":"Valor1"
    }   

    //data es el estudiante
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`,bodyEstudiante,{headers: headers}).then(r=>r.data);
}  

 const actualizarEstudiante=(bodyEstudiante,id)=>{
    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkyNzQ5NTQyLCJleHAiOjE2OTI3NTAxNDJ9.Jm1jALXk7WAZJZHcpu2NeJIhbCRYWEe5IEA4lZdHUtYj_3aWYsOkT2_ZnNsJZQV4ypaA7Pq0xXGpKwAtTEkQ3A",
        "Mensaje":"Valor1"
    }   

    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,bodyEstudiante,{headers: headers}).then(r=>r.data);

}  

 const eliminarEstudiante=(id)=>{

    const headers={
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNaWNoYWVsIiwiaWF0IjoxNjkyNzQ5NTQyLCJleHAiOjE2OTI3NTAxNDJ9.Jm1jALXk7WAZJZHcpu2NeJIhbCRYWEe5IEA4lZdHUtYj_3aWYsOkT2_ZnNsJZQV4ypaA7Pq0xXGpKwAtTEkQ3A",
        "Mensaje":"Valor1"
    }   

    axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`,{headers: headers}).then(r=>r.data);

} 