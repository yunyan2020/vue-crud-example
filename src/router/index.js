import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue'
import AddPerson from '../view/AddPerson.vue'

const routes = [
  {
    name: 'Home',
    path: '',
    component: Home
  },
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'AddPerson',
    path: '/addPerson',
    component: AddPerson
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;