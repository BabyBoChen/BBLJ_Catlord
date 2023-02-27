import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

showSplashScreenAsync("assets/splashLogo.png", 1500);
const app = createApp(App);
app.use(router);
app.mount('#app');
