import { createRouter, createWebHistory } from "vue-router";

import ListCategory from "./pages/ListCategory.vue";
import HelloWorld from "./components/HelloWorld.vue";

// crear las rutas
const routes = [
    {
        name: 'list', 
        path: '/', 
        component: ListCategory
    }, 
    {
        name: 'saludo', 
        path: '/saludo', 
        component: HelloWorld
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes: routes
});

export default router;