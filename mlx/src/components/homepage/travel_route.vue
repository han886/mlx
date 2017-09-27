<template>
  <div class="travel_hot travel_route">
    <div class="tra_hot_top">
      <div>路线推荐</div>
      <div>RECOMMENDED ROUTE</div>
    </div>
    <div class="tra_hot_content">
      <ul v-if="isShowIcon">
        <li v-for="item in RandomList" >
          <a @click="getDedailId(item.id)" class="RouteListImg  ">
            <div class="tra_hot_con">出发地：
              <span>{{item.startAddress}}</span>&nbsp;&nbsp;&nbsp;深度
              <span>{{item.dayNum}}</span>天游
            </div>
            <!--<span >{{item.name}}</span>-->
            <img :src="item.imgSrc" alt="">
          </a>
          <a  class="routeName">{{item.name}}</a>
          <div class="travel_hot_sel">
            ￥ <span>1500/</span>起
          </div>
          <div class="travel_hot_num">
            销量 <span>0</span>
          </div>
        </li>
      </ul>
      <div  v-else class="loadingIcon"><i class="el-icon-loading"></i></div>
    </div>
    <div class="tra_hot_footer"  v-show="pages == '/home'">
      <button @click="routeChange(travelRoutePage)">more <i class="iconfont icon-jiantou tra_hot_f_b "></i></button>
    </div>
  </div>
  <!--travel_route-->
</template>
<script>
  export default {
    name: 'travel_route',
    data() {

      return {
        pages :  this.$route.query.pages,
        travelRoutePage:'/travelRoutePage',
        isShowIcon:false,
        RandomList: [],
        id: 'http://192.168.1.22:9090',
      }
    },
    methods: {
      createFunc() {
        this.getRouteList()
      },
      getRouteList() {
        let link = 'http://192.168.1.22:9090/api/productInfo/recommendLine'
        this.$http.post(link).then((res) => {
          // 获取路线列表
          this.isShowIcon = true
//          window.console.log(res.data.response)
          let fristList = res.data.response
          let list =[];
          for (let i = 0 ; i < fristList.length; i++){
            let guideObj = {

              id : fristList[i].id,
              imgSrc : fristList[i].proImg,
              startAddress : fristList[i].startAddress,
              routeName :  fristList[i].name,
              dayNum : fristList[i].dayNum,
            }
            list.push(guideObj)
          }
          this.RandomList = this.getRandomList(list)
        }, response => {
          // error callback
        })
      },
      routeChange(route) {
        this.$router.push({path: route,query :{pages: route}})
      },
      //跳转详情页并获取id
      getDedailId(id){
//        console.log(id + '景点页面的')
        this.$router.push({path:'/tavelRouteDetail',query:{routDetailId:id}})
      }

    },
    created() {
      this.createFunc()
    }
  }
</script>
<style>
  .RouteListImg img {
    width: 100%;
    height: 190px;
  }
  .routeName{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding:0 4px 0 4px ;
  }
</style>
