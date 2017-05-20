<template>
  <div class="tmpl">
        <h3>{{info.title}}</h3>
        <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
import common from '../../kits/common.js'
export default {
    data(){
        return{
            info:{}
        }
    },
    created(){
        this.getinfo()
    },
    methods:{
        
        getinfo(){
            let id = this.$route.params.id
            let url = common.apihost + '/api/goods/getdesc/'+id
            this.$http.get(url).then(res=>{
                this.info = res.body.message[0]
            })
        }
    }
}
</script>

<style scoped>
    .tmpl{
        padding: 5px;
    }
    .tmpl h3{
        color: #0094ff;
        padding: 5px 0;
        border-bottom: 1px solid #ccc;
    }
</style>
