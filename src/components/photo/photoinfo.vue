<template>
  <div class="tmpl">
    <!--{{this.$route.params.id}}-->
    <!--标题-->
    <div class="title">
        <h4>{{imgdata.title}}</h4>
        <p>
            {{ imgdata.add_time| fmtdate('YYYY-MM-DD')}}
            {{imgdata.click}}次浏览
        </p>
    </div>
    <div class="imglist">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/news/newslist">
                <img width="109" height="109" src="http://www.webhm.top:8080/upload/201504/18/thumb_201504181230434303.jpg" alt="">
            </router-link >
            </li>
        </ul>
        <div class="content" v-html="imgdata.content">
            
        </div>
    </div>
  </div>
</template>
<style scoped>
    .title h4[data-v-4af05b86]{
        line-height: 150%;
    }
    .title{
        padding: 5px;
    }
    .title h4{
        color: #0094ff;
        font-size: 16px;
    }
    .mui-grid-view.mui-grid-9{
        background: #fff;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
        padding: 0;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell > a:not(.mui-btn){
        padding: 5px 0;
    }
    .imglist ul{
        padding: 5px 0;
    }
</style>
<script>
import common from '../../kits/common.js'
export default {
  data(){
      return{
        imgdata:{}
      }
  },
  created(){
      this.getimgdata();
  },
  methods:{
      getimgdata(){
          let id = this.$route.params.id
          let url = common.apihost+'/api/getimageInfo/'+id
          this.$http.get(url).then(res=>{
            this.imgdata = res.body.message[0]
          },res=>{
            console.log('获取失败！')
          })
      }
  }
}
</script>


