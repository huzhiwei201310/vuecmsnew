<template>
  <div class="tmpl">
      <subcomment :artid="goodsid"></subcomment>
  </div>
</template>

<script>
import subcomment from '../subcomp/subcomment.vue'
export default {
    data(){
        return{
            goodsid:0
        }
    },
    created(){
        this.goodsid = this.$route.params.id
    },
    components:{
        subcomment
    }
}
</script>

<style>

</style>
