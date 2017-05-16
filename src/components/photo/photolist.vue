<template>
  <div class="tmpl">
      <!--分类-->
      <div class="cate">
          <ul id="cateul">
                <li><a @click="getimglist(0)">全部</a></li>
              <li v-for="item in catelist"><a @click="getimglist(item.id)">{{item.title}}</a></li>
          </ul>
      </div>
      <!--列表-->
      <div class="imglist">
          <ul>
            <li v-for="item in list">
                <h4>{{item.title}}</h4>
                <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                <img v-lazy="item.img_url">
                </router-link>
                <p>{{item.zhaiyao}}</p>
            </li>
        </ul>
      </div>
  </div>
</template>
<style scoped>
/*懒加载样式*/
    .imglist{
        padding: 35px 0 0;
    }
    .imglist ul{
        list-style: none;
        padding: 0;
    }
    .imglist ul li,.imglist ul li img{
        width: 100%;
        margin:0 auto;
    }
    .imglist ul li{
        position: relative;
        padding: 0 0 10px;
    }
    .imglist ul li h4{
        line-height: 130%;
        color: #333;
    }
    .imglist ul li p{
        position: absolute;
        width: 100%;
        padding: 10px;
        background: rgba(0,0,0,0.5);
        color: #fff;
        left: 0;
        bottom: 8px;
    }
    image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
    }
    .cate{
         width:100%; 
         position: fixed; 
         height: 45px; 
         overflow-x: auto; 
         overflow-y: hidden;
         background: #fff;
         z-index: 10;
    }
    .cate ul{ 
        width: 900px;
        padding: 5px 0;
        margin: 0;
    }
    .cate li{
        list-style: none;
        display: inline-block;
        padding: 0 10px 0
    }
    .cate li a{
        color: #0094ff;
        font-size: 14px;
    }
</style>
<script>
import common from '../../kits/common.js'
import { Indicator } from 'mint-ui'
export default {
  data(){
      return{
        list:[],
        catelist:[]
      }
  },
  created(){
    this.getcate();
    this.getimglist(0)
  },
  methods:{
      getcate(){
        let url = common.apihost + '/api/getimgcategory';
        this.$http.get(url).then(res=>{
            this.catelist = res.body.message;
            document.getElementById('cateul').style.width = (res.body.message.length+1)*80+'px';
        },res=>{
            console.log('获取失败！')
        })
      },
      getimglist(cateid){
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        let url = common.apihost+'/api/getimages/'+cateid;
        this.$http.get(url).then(res=>{
            // let imghost = common.imghost
            // res.body.message.forEach(item=>{
            //     item.img_url = imghost+item.img_url
            // });
            this.list = res.body.message
            Indicator.close();
        },res=>{
            console.log('获取失败！')
        })
        
      }
  }
}
</script>


