<template>
    <label for="">ID</label>
    <input v-model="id" type="text">

    <label for="">Cedula</label>
    <input v-model="cedula" type="text">


    <label for="">Nombre</label>
    <input v-model="nombre" type="text">

    <label for="">Apellido</label>
    <input v-model="apellido" type="text">

    <button @click="actualizarEstudiante">Actualizar</button>
</template>

<script>

//necesito consumir el metodo de la API
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js"

export default {
    data() {
        return {
            id: null,
            cedula: null,
            nombre: null,
            apellido: null
        };
    },
    methods: {
        async actualizarEstudiante() {
            const data = {
                id: this.id,
                cedula: this.cedula,
                nombre: this.nombre,
                apellido: this.apellido,
                provincia: "Pichincha",
                fechaNacimiento: "2002-04-20T00:00:00"

            }
            await actualizarEstudianteFachada(data, this.id)
        },
    },

}
</script>

<style></style>