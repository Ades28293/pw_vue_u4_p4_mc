<template>
      <div class="formulario">
      <h3>Ingrese el identificador a eliminar:</h3>
      <div>
        <label for="Id">Id:</label>
        <input v-model="id" type="text" id="Id">
      </div>
  
    
      <button @click="eliminarEstudiante">Eliminar</button>
    </div>

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