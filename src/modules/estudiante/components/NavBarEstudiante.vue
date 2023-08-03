<template>
  <div class="navega">
    <router-link id="opcion0" to="/">Bienvenida</router-link>
    <router-link id="opcion1" to="/consultar">Consultar Estudiante</router-link>
    <router-link id="opcion2" to="/guardar">Guardar Estudiante</router-link>
    <router-link id="opcion3" to="/actualizar">Actualizar Estudiante</router-link>
    <router-link id="opcion4" to="/eliminar">Eliminar Estudiante</router-link>
    <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center; /* Centra horizontalmente los elementos */
  padding: 0 30px;
}

div, a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  margin-bottom: 25px;
}

#opcion0, #opcion1, #opcion2, #opcion3, #opcion4 {
  background-color: white;
  
}

#opcion0:hover, #opcion1:hover, #opcion2:hover, #opcion3:hover, #opcion4:hover {
  background-color: aqua;
}

.navega {
  margin-left: 445px;
}
</style>
