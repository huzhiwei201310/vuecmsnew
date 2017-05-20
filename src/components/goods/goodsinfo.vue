<template>
    <div class="tmpl">
        <!--1实现商品轮播-->
        <subimgsilder class="subimgsilder" :imagelist="imagelist"></subimgsilder>
        <!--2实现商品购买区域-->
        <div class="sell">
            <h2>{{goodsinfodata.title}}</h2>
            <div class="sellprice">
                市场价：<s>￥{{goodsinfodata.market_price}}</s>  销售价：<span>￥{{goodsinfodata.sell_price}}</span>
            </div>
            <div class="count">
                购买数量：<subnumber class="subnumber" v-on:count="getcount"></subnumber>
            </div>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
        </div>
        <div class="params">
            <h6>商品参数</h6>
            <ul>
                <li>商品货号：{{goodsinfodata.goods_no}}</li>
                <li>库存情况：{{goodsinfodata.stock_quantity}}件</li>
                <li>上架时间：{{goodsinfodata.add_time |  fmtdate('YYYY-MM-DD')}}</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
/*params*/
.params ul li{
    list-style: none;
}
.subnumber{
    display: inline-block;
}
.subimgsilder,.sell,.params{
    border:1px solid #ccc;
    margin: 5px; 
    padding: 5px;
    border-radius: 5px;
}
.sell{
    padding-bottom: 15px;
}
.sell h2,.params h6{
    line-height: 150%;
    color:#0094ff;
    font-size: 20px;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
}
.sellprice,.count{
    padding: 8px 0 15px;
}
.sellprice s{
    margin:0 15px 0 0;
}
.sellprice span{
    font-size: 16px;
    color: red;
}
</style>
<script>
import subimgsilder from '../subcomp/subimgsilder.vue'
import common from '../../kits/common.js'

import subnumber from '../subcomp/subnumber.vue'
export default {
  data(){
      return{
        imagelist:[],
        goodsinfodata:{}
      }
  },
  created(){
    this.getImageList()
    this.getgoodsinfo()
  },
  methods:{
    getImageList(){
        let id = this.$route.params.id;
        let url = common.apihost+'/api/getthumimages/'+id;
        this.$http.get(url).then(res=>{
            this.imagelist = res.body.message;
        })
    },
    getcount(count){
        console.log('count='+count)
    },
    getgoodsinfo(){
        let id = this.$route.params.id
        let url = common.apihost + '/api/goods/getinfo/'+id
        this.$http.get(url).then(res=>{
            this.goodsinfodata = res.body.message[0]
        })
    }
  },
  components:{
      subimgsilder,
      subnumber
  }
}
</script>


