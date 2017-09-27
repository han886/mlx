<template>
  <div class="travel_hot" style="background-color:#f7f7f7 ">
    <div class="tra_hot_top" style="background-color:#f7f7f7 ">
      <div>热门景点</div>
      <div>POPULAR DESTINATION</div>
    </div>
    <div class="tra_hot_tab" style="background-color:#f7f7f7 ">
      <a href="#">所有景区</a>
      <a href="#">免费景区</a>
      <a href="#">打折景区</a>
      <a href="#">3A景区</a>
      <a href="#">4A景区</a>
      <a href="#">5A景区</a>
    </div>
    <div class="tra_hot_content" style="background-color:#f7f7f7 ">
      <ul v-if="isShowIcon">
        <li v-for="item in RandomList">
          <a @click="getDedailId(item.id)" class="hotpic"  >
            <img :src="item.imageSrc" alt="">
            <span class="tra_hot_con">{{item.topTip}}</span>
          </a>
          <a @click="getDedailId(item.id)" >{{item.hotName}}</a>
          <div class="travel_hot_good" >
            <span>市场价：{{item.hotPrice}}</span>
            <span>随行：优惠{{item.hotDiscounts}}</span>
            <span>{{item.hotProvince}}：{{item.hotCity}}</span>
          </div>
        </li>
      </ul>
      <div  v-else class="loadingIcon"><i class="el-icon-loading"></i></div>
    </div>
    <div class="tra_hot_footer" v-show="pages == '/home'">
      <button @click="routeChange(hotPage)">more <i class="iconfont icon-jiantou tra_hot_f_b "></i></button>
      <div class="tra_hot_f_img"><img src="../../assets/interval.jpg" alt=""></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'travel_hot',
    data() {

      return {
        hotPage: '/hotPage',
        isShowIcon: false,
        pages :  this.$route.query.pages,
        RandomList :[],
        link: 'http://192.168.1.22:9090'
      }
    },
    methods: {
      createFunc() {
        this.getHotList()
      },
      getHotList() {
        let link = 'http://192.168.1.22:9090/api/travelScenic/scenicList'
        this.$http.post(link).then((res) => {
//          window.console.log(res.data.response)
          this.isShowIcon = true
          let fristList = res.data.response
          let list =[];
          for (let i = 0 ; i < fristList.length; i++){
            let hotObj = {
              id : fristList[i].scenic_id ,
              imageSrc : fristList[i].img,
              hotName : fristList[i].sname,
              topTip : fristList[i].discounts_member,
              hotDiscounts : fristList[i].discounts,
              hotPrice : fristList[i].travelScenicTickets[0].price,
              hotProvince : fristList[i].province,
              hotCity :   fristList[i].city
            }
            list.push(hotObj)
          }
           this.RandomList = this.getRandomList(list)
//          console.log(this.RandomList);
        }, response => {
          // error callback
        })
      },
      //跳转子热门景点页面
      routeChange(route) {
        this.$router.push({path: route,query :{pages: route,}})
      },
      //跳转详情页并获取id
      getDedailId(id){
        console.log(id + '景点页面的')
        this.$router.push({path:'/tavelHotDetail',query:{hotDetailId:id}})
      }


    },
    created() {
      this.createFunc()
    }
  }
</script>
<style>
  .travel_hot{
    background-color: #f7f7f7;
  }
  .tra_hot_footer{
    margin: 50px 0 50px 0;
  }
</style>
