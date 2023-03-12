import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue';
import CryLaugh from '../views/cryLaugh/CryLaugh.vue';
import LeftRight from '../views/leftRight/LeftRight.vue';
import ChosenOne from '../views/chosenOne/ChosenOne.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cryLaugh',
            name: 'CryLaugh',
            component: CryLaugh
        },
        {
            path: '/leftRight',
            name: 'LeftRight',
            component: LeftRight
        },
        {
            path: '/chosenOne',
            name: 'ChosenOne',
            component: ChosenOne
        },
    ]
})

export default router
