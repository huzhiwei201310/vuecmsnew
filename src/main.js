// 1导入相关包
import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'

// 导入.vue组件
import App from './App.vue'

import '../statics/mui/css/mui.css'
import '../statics/mui/css/icons-extra.css'
// import '../statics/mui/js/mui.min.js'

import mintUI from 'mint-ui'

import 'mint-ui/lib/style.min.css'

// 2在Vue中加载vueRouter

Vue.use(vueRouter)
Vue.use(vueResource)
Vue.use(mintUI)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

import moment from 'moment'
Vue.filter('fmtdate',function(input,datefmtstring){
	// let date = new Date(input);
	return moment(input).format(datefmtstring)
})

// 3定义路由规则
import '../statics/css/site.css'
import Home from './components/Home/Home.vue'
import member from './components/member/member.vue'
import shopcar from './components/shopcar/shopcar.vue'
import search from './components/search/search.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'

let router = new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{name:'root',path:'/',redirect:'./Home'},
		{name:'home',path:'/Home',component:Home},
		{name:'member',path:'/member',component:member},
		{name:'shopcar',path:'/shopcar',component:shopcar},
		{name:'search',path:'/search',component:search},
		{name:'newslist',path:'/news/newslist',component:newslist},
		{name:'newsinfo',path:'/news/newsinfo/:id',component:newsinfo},
		{name:'photolist',path:'/photo/photolist',component:photolist},
		{name:'photoinfo',path:'/photo/photoinfo/:id',component:photoinfo},
		{name:'goodslist',path:'/goods/goodslist',component:goodslist},
		{name:'goodsinfo',path:'/goods/goodsinfo/:id',component:goodsinfo}
	]
})

// 4使用router
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})
