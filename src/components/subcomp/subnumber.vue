<template>
    <div class="subtmpl">
        <div class="left" @click="substrick">-</div>
        <div class="middle">{{resObj.count}}</div>
        <div class="right" @click="add">+</div>
    </div>
</template>
<style scoped>
    .subtmpl div{
        display: inline-block;
        border: 1px solid #ccc;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    .subtmpl .middle{
        width: 40px;
        padding: 0 5px;
    }
</style>
<script>
const ADD = 'add'
const SUBSTRICK = 'substrick'
export default {
  data(){
      return{
        resObj:{ type:ADD,goodsid:0,count:0}
      }
  },
  props:['initcount','goodsid'],
  created(){
    this.resObj.count = this.initcount>1? this.initcount: 1
    this.resObj.goodsid = this.goodsid >0? this.goodsid:0
  },    
  methods:{
    add(){
        this.resObj.count++
        this.resObj.type = ADD;
        this.notiflycount()
    },
    substrick(){
        if(this.resObj.count<=1){
            this.resObj.count=1
            return
        }
        this.resObj.count--
        this.resObj.type = SUBSTRICK;
        this.notiflycount()
    },
    notiflycount(){
        let key = 'count'
        this.$emit(key,this.resObj)
    }
  }
}
</script>


