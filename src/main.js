import Vue from 'vue';
import App from './App.vue';
import store from 'store';
import router from 'router';
import './scss/index.scss';

console.log(process.env);

new Vue({
	el: '#app',
	store,
	router,
	render: (h) => h(App)
});
