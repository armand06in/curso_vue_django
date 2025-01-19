import { createRouter, createWebHistory } from "vue-router";

import ListCategory from "./pages/ListCategory.vue";
import ListType from "./pages/ListType.vue";
import ListElement from "./pages/ListElement.vue";
import BasePage from "./pages/BasePage.vue";
import DetailElement from "./pages/detail/DetailElement.vue";

// crear las rutas
const routes = [
    {
        path: '/list', 
        component: BasePage, 
        children:[
            {
                name: 'list-element', 
                path: 'element /:type?/:id?', 
                component: ListElement
            }, 
            {
                name: 'list-category', 
                path: 'category', 
                component: ListCategory
            }, 
            {
                name: 'list-type', 
                path: 'type', 
                component: ListType
            }
        ]
    }, 
    {
        path: '/detail', 
        component: BasePage, 
        children:[
            {
                name: 'detail-element', 
                path: 'element /:slug?', 
                component: DetailElement
            } 
        ]
    }
];

const router = createRouter({
    history: createWebHistory(), 
    routes: routes
});

export default router;