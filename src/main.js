import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

showSplashScreenAsync("assets/splashLogo.png", 1500);
createApp(App).use(router).mount('#app');
