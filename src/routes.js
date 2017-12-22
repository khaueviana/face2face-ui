import Login from './components/Login/Login.vue';
import SignUp from './components/SignUp/SignUp.vue';
import Home from './components/Home/Home.vue';
import Game from './components/Game/Game.vue';

export const routes = [
    { path: '', name: 'home', component: Home, title: 'Home', menu: true },
    { path: '/login', name: 'login', component: Login, title: 'Login', menu: true },
    { path: '/signup', name: 'signup', component: SignUp, title: 'SignUp', menu: true },
    { path: '/home', name: 'home', component: Home, title: 'Home', menu: true },
    { path: '/game', name: 'game', component: Game, title: 'Game', menu: true },
];