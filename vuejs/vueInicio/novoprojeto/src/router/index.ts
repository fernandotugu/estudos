import Vue from 'vue'
import VueRouter from 'vue-router'
import TratarRotas from '@/shared/classes/TratarRotas'
import AppBaseRouter from '@/app/base/routes.ts';

Vue.use(VueRouter)

var rotasAplicacao = [AppBaseRouter];

var childsAppBaseRouter:any  = [];
TratarRotas.adicionarFilhos(AppBaseRouter,childsAppBaseRouter);


const routes = TratarRotas.montarRotas(rotasAplicacao);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
