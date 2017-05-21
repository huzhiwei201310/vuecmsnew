<template>
	<div class="tmpl">
		<div class="row clearfloat" v-for="(item,index) in shopcarlist">
			<div class="btn fl">
				<mt-switch v-model="values[index]"></mt-switch>
			</div>
			<div class="center fl">
				<img width="75" height="75" :src="item.thumb_path" alt="">
			</div>
			<div class="txt fl">
				<h4>{{item.title}}</h4>
				<span>￥{{item.sell_price}}</span>
				<subnumber :initcount = "item.cou" :goodsid="item.id" class="subnumber" v-on:count="getcount"></subnumber>
				<a @click="del(item.id)" href="javascript:;">删除</a>
			</div>
		</div>

		<!--总计-->
		<div class="total clearfloat">
			<div class="total_l fl">
				<h5>总计（不含运费）</h5>
				<span>已经勾选商品{{selectedcount}}件,总价￥{{setment}}元</span>
			</div>
			<div class="total_r fl">
				<mt-button type="danger" size="small">去结算</mt-button>
			</div>
		</div>
		<!--{{values}}-->
	</div>
</template>

<style scoped>
	.total{
		padding: 10px 5px;
		background: #eee;
		margin:10px 0 0;
	}
	.total h5{
		color: #333;
		font-weight: bold;
		padding: 5px 0;
	}
	.total_l{
		width:70%;
	}
	.total_r{
		width: 30%;
		padding: 10px 0 0 ;
	}
	.row{
		margin:5px 0 0;
		border-bottom: 1px solid #ccc;
		padding: 5px;
	}
	.txt{
		width: 58%;
	}
	.txt h4{
		color: #0094ff;
	}
	.txt span{
		color: red;
		font-size: 14px;
	}
	.btn{ padding: 10px 0;}
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
import {setItem,getItem,subStrictItem,removeItem} from '../../kits/localStorage.js'
import common from '../../kits/common.js'
export default{
	data(){
		return{
			selectedcount:0,
			values:[],
			shopcarlist:[]
		}
	},
	created(){
		this.initPageData();
	},
	methods:{
		getcount(resObj){
			if(resObj.type=='add'){
				this.add(resObj)
				this.updatashopcarlist(1,resObj.goodsid)
			}else if(resObj.type=='substrick'){
				// this.substrick(resObj)
				// console.log(resObj.type)
				subStrictItem(resObj.goodsid)
				this.updatashopcarlist(-1,resObj.goodsid)
			}


		},
		add(resObj){
			setItem({goodsid:resObj.goodsid,count:1})
		},
		updatashopcarlist(count,goodsid){
			for(let i = this.shopcarlist.length-1; i>=0; i--){
				if(this.shopcarlist[i].id==goodsid){
					this.shopcarlist[i].cou = this.shopcarlist[i].cou + count
				}
			}
		},
		// substrick(resObj){
		// 	let arr = localStorage.getItem()
		// 	arr.forEach()
		// },
		initPageData(){
			let arr = getItem()
			// let tmpArr = []
			// let count  = []
			let goodsObj = {}
			arr.forEach(item=>{
				// tmpArr.push(item.goodsid)
				if(goodsObj[item.goodsid]){
					goodsObj[item.goodsid]+=item.count
				}else{
					goodsObj[item.goodsid] = item.count
				}
			})

			let idarr = []
			for(let key in goodsObj){
				idarr.push(key)
			}
			let ids = idarr.join(',')

			let url = common.apihost + '/api/goods/getshopcarlist/'+ids

			this.$http.get(url).then(res=>{
				res.body.message.forEach(item=>{
					item.cou = goodsObj[item.id]
					this.values.push(false)
				})
				this.shopcarlist = res.body.message
			})

			// console.log(ids)

		},
		getTotalAmount(){
			let totalAmount = 0
			this.values.forEach((item,index)=>{
				if(item==true){
					let goodsinfo = this.shopcarlist[index]
					let amount = goodsinfo.cou*goodsinfo.sell_price
					totalAmount+=amount
				}
			})
			return totalAmount
		},
		del(goodsid){
			let index = this.shopcarlist.findIndex(c=>c.id==goodsid)
			if(index>=0){
				this.shopcarlist.splice(index,1)
			}

			removeItem(goodsid)
			
		}
	},
	computed:{
		setment(){
			let trueArr = this.values.filter(v=>v==true)
			this.selectedcount = trueArr.length

			return this.getTotalAmount()
		}
	},
	components:{
		subnumber
	}
}

</script>

