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
                <!--动画小球-->
                <transition v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter">
                    <div v-show="isshow" class="ball"></div>
                </transition>
                
            </div>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="toshopdata">加入购物车</mt-button>
        </div>
        <div class="params">
            <h6>商品参数</h6>
            <ul>
                <li>商品货号：{{goodsinfodata.goods_no}}</li>
                <li>库存情况：{{goodsinfodata.stock_quantity}}件</li>
                <li>上架时间：{{goodsinfodata.add_time |  fmtdate('YYYY-MM-DD')}}</li>
            </ul>
        </div>

        <!--图文-->
        <div class="footer">
            <mt-button @click="desc" plain  type="primary" size="large">图文介绍</mt-button>
            <mt-button @click="comment" plain class="mt10" type="danger" size="large">商品评论</mt-button>
        </div>
    </div>
</template>
<style scoped>
.ball{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: red;
    position: absolute;
    right: 50%;
    top: 13px;
    margin:0 55px 0 0;
    transition: all 1s cubic-bezier(.5,-0.67,.83,.67);
    z-index: 100;
}
/*.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translate(80px,270px)
}*/
.mt10{
    margin:10px 0 0;
}
/*params*/
.params ul li{
    list-style: none;
}
.subnumber{
    display: inline-block;
}
.subimgsilder,.sell,.params,.footer{
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
    position: relative;
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

import {vueobj} from '../../kits/commonvue.js'
import {setItem} from '../../kits/localStorage.js'
export default {
  data(){
      return{
        isshow:false,
        imagelist:[],
        goodsinfodata:{},
        goodscount:1
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
        // console.log('count='+count)
        this.goodscount = count
    },
    getgoodsinfo(){
        let id = this.$route.params.id
        let url = common.apihost + '/api/goods/getinfo/'+id
        this.$http.get(url).then(res=>{
            this.goodsinfodata = res.body.message[0]
        })
    },
    comment(){
        let id =  this.$route.params.id;
        this.$router.push({
            name:'goodscomment',
            params:{ id: id}
        })
    },
    desc(){
        let id = this.$route.params.id;
        this.$router.push({name:'goodsdesc',params:{id:id}})
    },
    toshopdata(){
        vueobj.$emit('shopdata',this.goodscount);
        let id = this.$route.params.id;
        setItem({goodsid:id,count:this.goodscount})

        this.isshow = !this.isshow;

    },
    beforeEnter(el){
        el.style.transform = 'translate3d(0,0,0)'
    },
    enter(el,done){
        var offset = el.offsetWidth;
        el.style.transform = 'translate3d(124px,300px,0)'
        done()
    },
    afterEnter(){
        this.isshow = !this.isshow
    }
  },
  components:{
      subimgsilder,
      subnumber
  }
}
</script>


