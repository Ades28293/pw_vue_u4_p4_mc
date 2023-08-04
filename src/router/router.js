import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
      path: "/",
      component: () => import("../modules/estudiante/pages/BienvenidaPage"),
    },
    {
      path: "/consultar/:cedula",
      component: () => import("../modules/estudiante/pages/ConsultaEstudiante"),
    },
    {
      path: "/guardar",
      component: () => import("../modules/estudiante/pages/GuardarEstudianteTest"),
    },
    {
      path: "/actualizar",
      component: () => import("../modules/estudiante/pages/ActualizarEstudiante"),
    },

    {
        path: "/eliminar",
        component: () => import("../modules/estudiante/pages/EliminarEstudiante"),
      },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../modules/estudiante/pages/NoEncontradaPage"),
    },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;
  