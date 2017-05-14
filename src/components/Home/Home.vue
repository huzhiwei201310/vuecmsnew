<template>
	<div class="tmpl">
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="(item,index) in list" :key="index">
		  	<img class="img" :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>

		<div class="mui-content">
	        <ul class="mui-table-view mui-grid-view mui-grid-9">
	            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            <router-link to="/news/newslist">
                    <span class="mui-icon icon-news"></span>
                    <div class="mui-media-body">新闻资讯</div>
				</router-link >
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            <router-link to="/news/newslist">
                    <span class="mui-icon icon-photo"></span>
                    <div class="mui-media-body">图片分享</div>
				</router-link >
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            <router-link to="/news/newslist">
                    <span class="mui-icon icon-goods"></span>
                    <div class="mui-media-body">商品购买</div>
				</router-link >
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            <router-link to="/news/newslist">
                    <span class="mui-icon icon-feedback"></span>
                    <div class="mui-media-body">留言反馈</div>
				</router-link >
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            <router-link to="/news/newslist">
                    <span class="mui-icon icon-video"></span>
                    <div class="mui-media-body">视频专区</div>
				</router-link >
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
	            <router-link to="/news/newslist">
                    <span class="mui-icon icon-callme"></span>
                    <div class="mui-media-body">联系我们</div>
				</router-link >
                </li>
	        </ul> 
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				//list: [{
			 	//		url: 'http://www.itcast.cn/subject/phoneweb/index.html',
			 	//		img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
				//	}, {
			 	//		url: 'http://www.itcast.cn/subject/phoneweb/index.html',
			 	//		img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
			 	//	}]
			 	list:''
			}
		},
		created(){
			this.getlunbo()
		},
		methods:{
			getlunbo(){
				var url = 'http://webhm.top:8899/api/getlunbo';
				this.$http.get(url).then(res=>{
					this.list = res.body.message
				},res=>{
					console.log('数据调用失败！')
				})
			}
		}
	}
</script>

<style scoped>
	.img{
		display:block;
		width:100%;
		height:100%;
	}
  .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 250px;
  }
  .mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 100%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
  .mint-swipe-items-wrap > div {
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none;
  }
  .mint-swipe-items-wrap > div.is-active {
    display: block;
    -webkit-transform: none;
    transform: none;
  }
  .mint-swipe-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: 0.2;
    margin: 0 3px;
  }
  .mint-swipe-indicator.is-active {
    background: #fff;
  }

  /*定义9宫格中的图标样式*/
.mui-grid-view.mui-grid-9{
	background:#fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell,.mui-grid-view.mui-grid-9{
	border:none;
}
.mui-icon{
	width:50px;
	height:50px;
}  
.icon-news{
	background:url(../../../statics/images/menu3.png) no-repeat;
	background-size:cover;
}
.icon-photo{
	background:url(../../../statics/images/menu4.png) no-repeat;
	background-size:cover;
}
.icon-goods{
	background:url(../../../statics/images/menu5.png) no-repeat;
	background-size:cover;
}
.icon-video{
	background:url(../../../statics/images/menu6.png) no-repeat;
	background-size:cover;
}
.icon-feedback{
	background:url(../../../statics/images/menu9.png) no-repeat;
	background-size:cover;
}
.icon-callme{
	background:url(../../../statics/images/menu10.png) no-repeat;
	background-size:cover;
}

</style>