<template>
    <label for="">Cedula</label>
   <input v-model="cedula" type="text">
   <button @click="eliminarEstudiante">Eliminar</button>
</template>

<script>
import { eliminarEstudianteFachada } from '../helpers/EstudianteCliente';


export default {

    data() {
        return {
            id:null
        
        };
    },
    methods:{
    async eliminarEstudiante(){
          eliminarEstudianteFachada(this.id)
        },
    },

}

</script>

<style>

</style>