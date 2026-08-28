import { inject, track } from '@vercel/analytics';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './style.css';

inject();
router.afterEach((to) => {
    track('pageview', { url: to.fullPath });
});

createApp(App).use(router).mount('#app');
