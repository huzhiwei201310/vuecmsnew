<template>
  <div class="tmpl">
      <!--分类-->
      <div class="cate">
          <ul>
                <li><a @click="getimglist(0)">全部</a></li>
              <li v-for="item in catelist"><a @click="getimglist(item.id)">{{item.title}}</a></li>
          </ul>
      </div>
      <!--列表-->
      <div class="imglist">
          <ul>
            <li v-for="item in list">
                <h4>{{item.title}}</h4>
                <img v-lazy="item.img_url">
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
            this.catelist = res.body.message
        },res=>{
            console.log('获取失败！')
        })
      },
      getimglist(cateid){
        let url = common.apihost+'/api/getimages/'+cateid;
        this.$http.get(url).then(res=>{
            let imghost = common.imghost
            this.list = res.body.message
        },res=>{
            console.log('获取失败！')
        })
        
      }
  }
}
</script>


