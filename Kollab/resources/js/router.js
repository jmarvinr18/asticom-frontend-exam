import Vue from 'vue'
import VueRouter from 'vue-router';
export default new VueRouter({
 routes: [
  {
   path: '/',
   component: () => import('./components/ExampleComponent.vue'),
  }
 ],
 mode: 'history'
},
)