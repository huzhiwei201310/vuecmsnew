<template>
    <div class="tmpl">
        <ul class="mui-table-view mui-grid-view">
            <li v-for="item in goodslist" class="mui-table-view-cell mui-media mui-col-xs-6">
                <router-link v-bind='{to:"/goods/goodsinfo/"+item.id}'>
                    <img class="mui-media-object" :src="item.img_url">
                </router-link>
                <div class="desc">
                    <h4>{{item.title}}</h4>
                    <div class="box">
                        <div class="price clearfloat">
                            <span class="hot fl">￥{{item.sell_price}}</span>
                            <span class="or_price fr">￥{{item.market_price}}</span>
                        </div>
                        <div class="box_b clearfloat">
                            <p class="fl">热卖中</p>
                            <p class="fr">剩余{{item.stock_quantity}}件</p> 
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import common from '../../kits/common.js'
export default {
  data(){
      return{
          goodslist:[]
      }
  },
  created(){
    this.getgoodslist(1)
  },
  methods:{
      getgoodslist(pageindex){
        let url = common.apihost + '/api/getgoods?pageindex='+pageindex;
        this.$http.get(url).then(res=>{
            this.goodslist = res.body.message;
        },res=>{
            console.log('获取失败！')
        })
      }
  }
}
</script>
<style scoped>
.desc h4{
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.desc {
    padding:5px;
    background: #eee;
}
.price{
    padding:5px 0;
}
.price span{
    color: #999;
    font-size: 12px;
}
.price span.hot{
    color: red;
}
.box_b p{
    font-size: 14px;
}
.or_price{
    text-decoration: line-through;
}
</style>



