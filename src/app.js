import Vue from 'vue';
import App from './App.vue';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

new Vue(App).$mount('#app');
