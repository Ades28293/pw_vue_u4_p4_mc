<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <label for="">Consultar</label><br>
   <Estudiante/><br>
   <label for="">Guardar</label><br>
   <GuardarEstudianteTest/><br>
   <label for="">Actualizar</label><br>
   <ActualizarEstudiante/><br>
   <label for="">Eliminar</label><br>
   <EliminarEstudiante/>--> 


   <NavBarEstudiante/>
   <router-view/>
   
</template>

<script>
//import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue'
//import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
//import GuardarEstudianteTest from './modules/estudiante/pages/GuardarEstudianteTest.vue'
//import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue'
import NavBarEstudiante from './modules/estudiante/components/NavBarEstudiante.vue'

export default {
  name: 'App',
  components: {
   /* Estudiante,
    GuardarEstudianteTest,
    ActualizarEstudiante,
    EliminarEstudiante,*/
    NavBarEstudiante
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
