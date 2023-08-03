<template>
    <div class="formulario">
      <h3>Ingrese los datos del Estudiante:</h3>
      <div>
        <label for="cedula">Cédula:</label>
        <input v-model="cedula" type="text" id="cedula">
      </div>
  
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" type="text" id="nombre">
      </div>
  
      <div>
        <label for="apellido">Apellido:</label>
        <input v-model="apellido" type="text" id="apellido">
      </div>
  
      <div>
        <label id="fecha1" for="fechaNacimiento">Fecha Nacimiento:</label>
        <input  v-model="fechaNacimiento" type="text" id="fechaNacimiento">
      </div>
  
      <div>
        <label for="provincia">Provincia:</label>
        <input v-model="provincia" type="text" id="provincia">
      </div>
  
      <button @click="guardarEstudiante">Guardar</button>
    </div>
</template>

<script>

//necesito consumir el metodo de la API
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"

export default {
    data() {
        return {
            cedula: null,
            nombre:null,
            apellido:null,
            fechaNacimiento:null,
            provincia: null
        };
    },
    methods:{
    async guardarEstudiante(){
        const data={
            cedula:this.cedula,
            nombre:this.nombre,
            apellido:this.apellido,
            provincia:this.provincia,
            fechaNacimiento:this.fechaNacimiento

        }
        await ingresarEstudianteFachada(data)
        },
    },

}
</script>

<style scoped>
.formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  padding: 20px;
  width: 300px; /* Ajusta el ancho del formulario si lo deseas */
  margin: 0 auto; /* Centra el formulario horizontalmente */
}

button:hover {
  background-color: aqua;
}

button {
  width: 150px;
  height: 25px;
  border-radius: 25px;
  margin-top: 25px;
}

label {
  margin-left: 1px;
}

#fecha1{
    margin-left: -55px;
}

input {
  margin-left: 4px;
  width: 150px;
}

/* Agrega un poco de espacio entre los campos del formulario */
.formulario > div:not(:last-child) {
  margin-bottom: 10px;
}
</style>