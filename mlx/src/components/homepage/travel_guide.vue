<template>
    <div class="travel_guide" style="background-color:#f7f7f7 ">
      <div class="tra_guide_top" style="background-color:#f7f7f7 ">
        <div>导游推荐</div>
        <div>THE TOUR GUIDE TO RECOMMEND</div>
      </div>
      <div class="tra_guide_content" style="background-color:#f7f7f7 " v-if="isShowIcon">
        <ul>
          <li v-for="item in RandomList ">
            <div class="tra_guide_msg">
              <div class="guidePic">
                <img :src='id + item.imgSrc' alt="">
              </div>
              <span class="tra_guide_isConfirm" v-show="item.isConfirm == 1">未审核</span>
              <span class="tra_guide_isConfirm" v-show="item.isConfirm == 2">审核中</span>
              <span class="tra_guide_isConfirm_long" v-show="item.isConfirm == 3">审核成功</span>
              <span class="tra_guide_isConfirm_long" v-show="item.isConfirm == 4">审核失败</span>
              <span class="guideName">{{item.guideName}}</span>
              <span class="tra_guide_ability">{{item.language}}\{{item.yearNum}}年\{{item.level}}级
              <i class="iconfont icon-xingbie" v-show="item.gender==2"></i>
              <i class="iconfont icon-nan" v-show="item.gender == 1"></i>
              <i class="unkonw" v-show="item.gender == 0">不详</i>
            </span>
              <span class="tra_guide_wordB"></span>
              <span class="tra_guide_word">{{item.intro}}</span>
              <span class="tra_guide_price">{{item.servicePrice}}￥/天</span>
            </div>
          </li>
        </ul>
      </div>
      <div  v-else class="loadingIcon"><i class="el-icon-loading"></i></div>
      <div class="tra_guide_footer" v-show="pages == '/home'">
        <button @click="routeChange(guidePage)">more <i class="iconfont icon-jiantou tra_guide_f_b "></i></button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'travel_guide',
    data() {

      return {
        guidePage: '/guidePage',
        isShowIcon: false,
        pages: this.$route.query.pages,
        RandomList: [],
        id: 'http://192.168.1.22:9090',
      }
    },
    methods: {
      createFunc() {
        this.getGuideList()
      },
      getGuideList() {
        let link = 'http://192.168.1.22:9090/api/guideInfo/list' //导游申请信息接口
        this.$http.get(link).then((res) => {
          //获取导游列表
          this.isShowIcon = true
//        window.console.log(res.data.response)
          let fristList = res.data.response
          let list = [];
          for (let i = 0; i < fristList.length; i++) {
            let guideObj = {
              id: fristList[i].id,
              imgSrc: fristList[i].headImg,
              isConfirm: fristList[i].authState,
              guideName: fristList[i].name,
              language: fristList[i].language,
              yearNum: fristList[i].yearNum,
              level: fristList[i].level,
              gender: fristList[i].gender,
              intro: fristList[i].intro,
              servicePrice: fristList[i].servicePrice,

            }
            list.push(guideObj)
          }
          this.RandomList = this.getRandomList(list)
//        console.log(this.GuideList);
        }, response => {
          // error callback
        })
      },
      routeChange(route) {
        this.$router.push({path: route,query :{pages: route}})
      },
    },
    created() {
      this.createFunc()
    }
  }

</script>

<style>
  .icon-xingbie {
    color: pink;
  }

  .icon-nan {
    color: skyblue;
  }

  .tra_guide_ability .unkonw {
    font-style: normal;
    font-size: 17px;
  }

  .tra_guide_footer {
    margin: 50px 0 50px 0;
  }

</style>
