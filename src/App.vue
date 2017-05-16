<template>
	<div class="app">
		
		<mt-header fixed title="传智.黑马vuejs内容管理系统"></mt-header>

		<div class="back" v-if="isShow">
			<a @click="goback">返回</a>
		</div>

		<router-view></router-view>

		<nav  class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/Home">
				<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
			</router-link>

			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact">
					
				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>

			<router-link class="mui-tab-item" to="/shopcar">
			<span class="mui-icon mui-icon-home">
				<span id="badge" class="mui-badge">0</span>
			</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>

			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
					<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isShow:false
			}
		},
		// created(){
		// 	this.isShow = false
		// },
		watch:{
			// 监控当前的路由对象$route
			'$route':function(newval,oldval){
				// console.log(newval)
				if(newval.path.toLowerCase()=='/home'){
					this.isShow = false
				}else{
					this.isShow = true
				}
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
.back{
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 100;
}
.back a{
	font-size: 16px;
	font-weight: bold;
	color: #fff;
}
</style>