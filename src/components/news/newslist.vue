<template>
  <div class="tmpl">
    <!--利用MUI中的图文列表样式实现新闻列表-->
        <ul class="mui-table-view">
            <li v-for="item in list"  class="mui-table-view-cell mui-media">
                <router-link v-bind='{to:"/news/newsinfo/"+item.id}'>
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <div class="left">发表时间：{{item.add_time | fmtdate('YYYY-MM-DD')}}</div>
                            <div class="right">点击数：{{item.click}}</div>
                        </p>
                    </div>
                </router-link>
            </li>
            <!--<li v-for="item in list" class="mui-table-view-cell mui-media">
                <router-link v-bind='{to:"/news/newsinfo/"+item.id}'>
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            发表时间:{{item.add_time | fmtdate('YYYY-MM-DD')}}
                            <span>点击数：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>-->
        </ul>
  </div>
</template>

<script>
import common from '../../kits/common.js'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getnewslist()
    },
    methods:{
        getnewslist(){
            var url = common.apihost+ '/api/getnewslist'
            this.$http.get(url).then(
                res=>{
                    this.list = res.body.message
                },
                res=>{
                    console.log('出错了')
                }
            )
        }
    }
}
</script>

<style scoped>
/*.mui-ellipsis{
    display: flex;
}*/
.left,.right{
    color: #0094ff;
    font-size: 12px;
}
.left{
    /*width: 120px;
    flex: 0 0 120px;  */
    float: left;
}
.right{
    /*flex:1;*/
    float: right;
}
.mui-table-view .mui-media-object{
    line-height: 62px;
    max-width: 62px;
    height: 62px;
}
.mui-table-view-cell p{
    padding: 0 0 20px 0;
}
</style>



