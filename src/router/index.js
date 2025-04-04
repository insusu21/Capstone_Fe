import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../components/MainHome.vue';
import LoginView from '../components/LoginView.vue';
import SignUp from '../components/SignUp.vue';

const routes = [
  { path: '/', name: 'home', component: MainHome },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup', component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
