<template>



  <DatosEstuduante/>
  
</template>

<script>

import DatosEstuduante from '../components/DatosEstuduante.vue';

export default {
    components:{
        DatosEstuduante
    },
    mounted(){
      //obtiene una lista de todos los parametros
     const {cedula}= this.$route.params;
     console.log(cedula)
     
    }
}
</script>

<style scoped>

</style>