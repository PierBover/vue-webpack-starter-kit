import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from 'components/Home.vue';

const router = new Router({
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return {x: 0, y: 0};
		}
	},
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home
		}
	]
});

router.onError((error) => {
	console.log('Router error:', error);
});

// router.beforeEach(async function (to, from, next) {
// });

export default router;
