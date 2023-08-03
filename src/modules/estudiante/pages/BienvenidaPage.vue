
<template>
  <div class="background">
    <h1>Bienvenido a la API de Matricula</h1>
    <h2>"Podras utilizar diferentes verbos en el Modelo Estudiante en esta Página Web "</h2>

    <p id="parrafo1">
      Una API de estudiante implementa las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar la información de 
        estudiantes en un sistema. Permite crear nuevos registros de estudiantes con datos como nombre, edad, dirección, y calificaciones. 
        Además, la API permite leer y recuperar la información de los estudiantes existentes, ya sea de forma individual o en listas. También permite actualizar los detalles de un estudiante, como sus calificaciones o información de contacto. Finalmente, la API posibilita la eliminación de estudiantes que ya no sean necesarios en el sistema. La implementación efectiva del CRUD en la API de estudiante proporciona una base sólida para administrar la información de los alumnos de manera eficiente y escalable.
    </p>

    <img id="principal" src="https://appmaster.io/cdn-cgi/image/width=1024,quality=83,format=auto/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente los elementos */
  align-items: center; /* Centra horizontalmente los elementos */
  background-color: rgb(0, 174, 255);
  border: 5px solid;
  margin: 25px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#principal {
  width: 450px;
  height: 450px;
  border: 5px solid;
  border-radius: 50px;

}

h1,h2,p{
  background-color: white;
  border: 5px solid;
  border-radius: 25px;
}

#parrafo1 {
  font-size: 30px;
}
</style>

