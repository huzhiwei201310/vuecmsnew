<template>
	<div class="tmpl">
		<div class="row clearfloat">
			<div class="btn fl">
				<mt-switch v-model="value"></mt-switch>
			</div>
			<div class="center fl">
				<img src="" alt="">
			</div>
			<div class="txt fl">
				<h4>标题</h4>
				<span>￥2333</span>
				<subnumber class="subnumber" v-on:count="getcount"></subnumber>
				<a href="javascript:;">删除</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.row{
		margin:5px 0 0;
		border-bottom: 1px solid #ccc;
		padding: 5px;
	}
	.txt h4{
		color: #0094ff;
	}
	.txt span{
		color: red;
		font-size: 14px;
	}
	.btn{ padding: 15px;}
	.subnumber{
		display: inline-block;
		padding: 0 10px;
	}
	.center{
		padding: 0 10px;
	}
</style>

<script>
import subnumber from '../subcomp/subnumber.vue'
export default{
	data(){
		return{
			value:false
		}
	},
	methods:{
		getcount(){

		}
	},
	components:{
		subnumber
	}
}

</script>

