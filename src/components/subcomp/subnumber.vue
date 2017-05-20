<template>
    <div class="subtmpl">
        <div class="left" @click="substrick">-</div>
        <div class="middle">{{count}}</div>
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
export default {
  data(){
      return{
        count:1
      }
  },
  methods:{
    add(){
        this.count++
        this.notiflycount()
    },
    substrick(){
        if(this.count<=1){
            this.count=1
            return
        }
        this.count--
        this.notiflycount()
    },
    notiflycount(){
        let key = 'count'
        this.$emit(key,this.count)
    }
  }
}
</script>


