<template>
  <div class="tmpl">
    <!--{{this.$route.params.id}}-->
    <div class="title">
        <h3 v-text="article.title"></h3>
        <p>
            {{article.add_time | fmtdate('YYYY-MM-DD')}}
            {{article.click}}次浏览
            分类：经济民生
        </p>
    </div>
    <div class="content" v-html="article.content"></div>
    
    <div>
        <subcomment :artid="artid"></subcomment>
    </div>
  </div>
</template>

<script>
import common from '../../kits/common.js'
import subcomment from '../subcomp/subcomment.vue'
export default {
  data(){
      return{
        article:{},
        artid:0
      }
  },
  components:{
    subcomment
  },
  created(){
    this.getdata();
    this.artid = this.$route.params.id
  },
  methods:{
      getdata(){
          let id = this.$route.params.id
          let url = common.apihost+'/api/getnew/'+id
          this.$http.get(url).then(res=>{
            this.article = res.body.message[0]
          },res=>{
              console.log('获取失败！')
          })
      }
  }
}
</script>
<style>
.title{
    height: 100%;
    border-bottom: 2px solid #ccc;
    padding: 5px;
}
.title h3{
    font-size: 16px;
    line-height: 150%;
    color: #0094ff;
}
.title p{
    color: #999;
}
.content{
    padding: 5px;
}
</style>


