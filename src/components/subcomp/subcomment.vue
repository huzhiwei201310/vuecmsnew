<template>
  <div class="tmpl">
      <div class="submittitle">
          提交评论
      </div>
      <div class="submitarea">
          <textarea class="textarea" ref="postcontent"  rows="5" placeholder="请输入评论"></textarea>
          <mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
      </div>
      <div class="commenttitle">
        评论列表
      </div>
      <div class="commentlist">
        <div class="outwrap clearfloat" v-for="item in comments">
            <div class="content1" v-text="item.content"></div>
            <div class="user" v-text="item.user_name"></div>
            <div class="time">{{item.add_time | fmtdate('YYYY-MM-DD')}}</div>
        </div>
      </div>

      <!--加载更多-->
      <mt-button class="more" type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>

<style scoped>
    .more{ margin:10px 0 0;}
    .tmpl{
        padding: 5px;
    }
    .submittitle,.commenttitle{
        font-weight: bold;
        font-size: 22px;
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }
    .commenttitle{
        padding: 25px 0 10px;
    }
    .textarea{
        margin:5px 0 0;
    }
    .outwrap{
        border-bottom: 1px solid #ccc;
        width: 100%;
        padding: 5px;
    }
    .user{
        float:left;
        color: #0094ff;
    }
    .time{
        float:right;
        color: #0094ff;
    }
    .content1{ 
        word-break: break-all;
        padding: 5px 0;
    }
</style>


<script>
import common from '../../kits/common.js'
import { Toast } from 'mint-ui'
export default {
  data(){
      return{
        comments:[],
        pageindex:1
      }
  },
  created(){
    this.getcomment(this.pageindex,false);
  },
  methods:{
    postcomment(){
        let url = common.apihost+ '/api/postcomment/'+this.artid;
        // this.$http.post(url,{content:})
        // console.log(this.$refs.postcontent)
        let contentText = this.$refs.postcontent.value
        if(!contentText || contentText.trim().length<=0){
            Toast('评论内容不能为空')
            return
        }
        this.$http.post(url,{content:contentText},{emulateJSON:true}).then(res=>{
            Toast('评论提交成功')
            this.getcomment(this.pageindex,true)
            this.$refs.postcontent.value = ''
        },res=>{
            console.log('提交失败!')
        })
    },
    getcomment(pageindex,isreload){
        let url =common.apihost+ '/api/getcomments/'+this.artid+'?pageindex='+pageindex;
        this.$http.get(url).then(res=>{
            if(isreload){
                this.comments = res.body.message
            }else{
                this.comments = this.comments.concat(res.body.message) 
            }
            
        },res=>{
            console.log('获取失败!')
        })
        // console.log(url)
    },
    getmore(){
        this.pageindex++
        this.getcomment(this.pageindex,false)
    }
  },
  props:['artid']
}
</script>

