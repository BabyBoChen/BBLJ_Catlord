import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let splashTask = showSplashScreenAsync("assets/splashLogo2.png", 1500);

const app = createApp(App);
app.use(router);

splashTask.then(function () {
    app.mount('#app');
});

