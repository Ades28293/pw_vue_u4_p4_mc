<template>
    <label for="">Cécula</label>
    <input v-model="cedula" type="text">
  

    <label for="">Nombre</label>
    <input v-model="nombre" type="text">

    <label for="">Apellido</label>
    <input v-model="apellido" type="text">

    <button @click="guardarEstudiante">Guardar</button>
</template>

<script>

//necesito consumir el metodo de la API
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js"

export default {
    data() {
        return {
            cedula: null,
            nombre:null,
            apellido:null
        };
    },
    methods:{
    async guardarEstudiante(){
        const data={
            cedula:this.cedula,
            nombre:this.nombre,
            apellido:this.apellido,
            provincia:"Pichincha",
            fechaNacimiento:"2002-04-20T00:00:00"

        }
        await ingresarEstudianteFachada()
        },
    },

}
</script>

<style></style>