<template>
  <section class="travel_route_detail" style="background-color: #f7f7f7">
    <img src="../../assets/route_detail.jpg" alt="">
    <div class="travel_route_content" :style="{height:daysLength + 'px'}">
      <div class="TH_detail_content" style="background-color: #f7f7f7"  >
        <div class="detail_msg">
          <!--轮播图-->
          <div class="detail_msg_pic">
            <img src="../../assets/route.png" alt="">
            <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" class="mySwiper">
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <swiper-slide class="swiperImg"><img src="../../assets/hot_detail.jpg" alt=""></swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
          <div class="detail_msg_word">
            <div class="detail_msg_word_top">
              <div class="detail_msg_name_route">伊犁草原+赛里木湖+天鹅湖+独库公路 深度9日游<span class="detail_msg_name_tip">3天行</span>
              </div>
              <i></i>
            </div>
            <div>
              <ul class="detail_msg_more">
                <li class="detail_msg_more_time">出发时间：2017-09-12
                  <div class="detail_msg_more_place">广州<i class="iconfont icon-jiantou detail_msg_more_place_icon "></i>青藏高原
                  </div>
                </li>
                <li class="detail_msg_more_people">召集人数：<span>16人</span></li>
                <li class="detail_msg_more_lable">
                  <ul class="detail_msg_more_lables">
                    标签:
                    <li>旅游</li>
                    <li>放飞</li>
                    <li>徒步</li>
                  </ul>
                </li>
                <li class="detail_msg_more_special"> 亮点：
                  <div>年保玉则-《中国国家地理》评选为中国大香格里拉旅游重点景区十大精品之一</div>
                </li>
              </ul>

              <div class="detail_msg_word_buy">
                <span class="detail_msg_word_buy_car">卡</span>
                <span class="detail_msg_word_buy_price">￥198</span>
                <span class="detail_msg_word_buy_price_r">/人</span>
                <el-button type="text" @click="dialogVisible =true" class="detail_msg_word_buy_price_b">立即购买
                </el-button>
                <el-dialog
                  title="扫描二维码完成支付"
                  :visible.sync="dialogVisible"
                  size="tiny"
                  :before-close="handleClose">
                  <img src="../../assets/hot_detail.jpg" alt="">
                  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">完成支付</el-button>
  </span>
                </el-dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_msg_word_datail">
        <div class="detail_msg_word_datails" >
          <ul class="detail_msg_word_datail_list">
            <li v-for="item in showDetail" @click="changeDetail(item.changeD)"><span>{{item.name}}</span></li>
          </ul>
          <products-info v-show="detailTemplate.productsD == clickTip"></products-info>
          <detail-plan v-show="detailTemplate.planD == clickTip"></detail-plan>
          <important-detail v-show="detailTemplate.importantD == clickTip"></important-detail>
          <price-info v-show="detailTemplate.princeD == clickTip"></price-info>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import productsInfo from  './route_detail/products_info'
  import detailPlan from  './route_detail/detail_plan'
  import importantDetail from  './route_detail/important_info'
  import priceInfo from  './route_detail/price_info'
  export default {
    name: 'tavelRoutDetail',
    components: {
      'products-info' : productsInfo,
      'important-detail' : importantDetail,
      'detail-plan' : detailPlan,
      'price-info' : priceInfo
    },
    watch: {
      '$route.query': function () {
        this.routDetailId = this.$route.query.routDetailId
        this.getId()
      }
    },
    data() {
      return {
        routDetailId: '',
        notNextTick: true,
        swiperOption: {
          autoplay: 2000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
//          scrollbar:'.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          slidesPerView: 4,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper) {

          },
        },
        dialogVisible: false,
        showDetail:[
          {changeD :'productsD',name:'产品介绍'},
          {changeD :'planD',name:'详情安排'},
          {changeD :'princeD',name:'费用说明'},
          {changeD :'importantD',name:'注意事项'},
        ],
        detailTemplate:{
          productsD :'productsD',
          importantD:'importantD',
          princeD:'princeD',
          planD:'planD'
        },
        clickTip:'productsD',
        daysLength:4000

      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
//      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      createFunc() {
        this.routDetailId = this.$route.query.routDetailId,
          this.getId()

      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
//      headerDragend(){
//        return
//      },
      getId() {
        window.console.log('这个页面每次都有输出的id 在这不  ' + this.routDetailId);
      },
      changeDetail(msg){
        console.log(msg);
        this.clickTip = msg
      }
    },
    created() {
      this.createFunc();
    }
  }
</script>
<style>
  .travel_route_detail {
    width: 100%;
    /*height: 4000px;*/
  }

  .travel_route_content {
    width: 100%;
    position: relative;
    margin-top: 40px;
  }

  .TH_detail_content {
    width: 100%;
    position: relative;
    height: 413px;

  }

  /*中心详情信息*/
  .detail_msg {
    width: 1020px;
    position: absolute;
    left: 50%;
    margin-left: -510px;
    padding-left: 8px;
    height: 413px;
    background-color: #fff;
  }

  /*中心信息左边*/
  .detail_msg_pic {
    width: 464px;
    height: 100%;
    padding-top: 10px;
    float: left;
  }

  .detail_msg_pic img {
    width: 100%;
    height: 302px;

  }

  /*轮播图*/
  .mySwiper {
    margin-top: 10px;
    width: 100%;
    height: 76px;
  }

  .mySwiper .swiperImg {
    padding-left: 4px;
  }

  .mySwiper .swiperImg img {
    width: 100%;
    height: 70px;
  }

  .swiper-button-prev, .swiper-button-next {
    margin-top: -10px;
    height: 20px;
  }

  /*中间信息右边*/
  .detail_msg_word {
    margin-top: 6px;
    float: right;
    width: 520px;
    margin-right: 8px;
  }

  .detail_msg_word_top {
    width: 100%;
    height: 110px;
    color: #424041;
  }

  .detail_msg_word_top .detail_msg_name_route {
    display: inline-block;

  }

  .detail_msg_name_route {
    width: 100%;
    font-size: 30px;
    position: relative;
  }

  .detail_msg_name_tip {
    font-size: 18px;
    display: inline-block;
    width: 70px;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
    background-color: #d50000;
    text-align: center;
    margin-left: 10px;
    border-radius: 6px;
    position: absolute;
    bottom: 7px;
  }

  .detail_msg_word_top i {
    display: block;
    width: 490px;
    float: left;
    border-bottom: 1px dashed #b6b6b6;
    margin-top: 4px;
  }

  /*中间信息右边中间*/
  .detail_msg_more {
    font-size: 20px;
    width: 100%;
    height: 194px;
  }

  .detail_msg_more_time {
    color: #d50000;
    width: 100%;
    height: 20px;
  }

  .detail_msg_more_place {
    display: inline-block;
    color: #424041;
    float: right;
    padding-right: 30px;
  }

  .detail_msg_more_place_icon {
    color: #d50000;
    font-size: 20px;
    padding: 0 4px;
  }

  .detail_msg_more_people {
    margin-top: 8px;
    color: #424041;
  }

  .detail_msg_more_lable {
    width: 100%;
  }

  .detail_msg_more_lable .detail_msg_more_lables {
    width: 100%;
  }

  .detail_msg_more_lable .detail_msg_more_lables li {
    display: inline-block;
    width: 48px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border-radius: 4px;
    font-size: 18px;
    color: #b0b0b0;
    border: 1px solid #ffc6c6;
    margin-left: 6px;
  }

  .detail_msg_more_special div {
    width: 494px;
    height: 68px;
    border: 1px solid #ffc6c6;
    font-size: 18px;
    color: #b0b0b0;
    padding: 10px;
    overflow: hidden;
  }

  .detail_msg_more_people span {
    color: #d50000;
  }

  /*中间信息右边底部*/
  .detail_msg_word_buy {
    margin-top: 18px;
    display: block;
    width: 519px;
    height: 70px;
    float: left;
    background-color: #fdf0f0;
  }

  .detail_msg_word_buy .detail_msg_word_buy_car {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    color: #d50000;
    border: 1px solid #d50000;
    border-radius: 50%;
    float: left;
    margin: 24px 4px 0 16px;
  }

  .detail_msg_word_buy .detail_msg_word_buy_price {
    display: inline-block;
    height: 100%;
    line-height: 70px;
    color: #d50000;
    font-size: 28px;
    float: left;
  }

  .detail_msg_word_buy_price_r {
    float: left;
    height: 100%;
    color: #949494;
    display: inline-block;
    font-size: 18px;
    line-height: 70px;
    margin-left: 6px;
  }

  .detail_msg_word_buy .detail_msg_word_buy_price_b {
    width: 140px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    background-color: #d50000;
    color: #ffffff;
    margin-top: 14px;
    float: right;
    margin-right: 20px;
  }

  /*详情文字*/
  .detail_msg_word_datail {
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
  }
  .detail_msg_word_datails{
    width: 1020px;
    height:auto;
    position: absolute;
    left: 50%;
    margin-left: -510px;
    background-color: #fff;
    padding: 20px 20px 0px;

  }
  .detail_msg_word_datail_list{
    height: 44px;
  }
  .detail_msg_word_datail_list li{
    font-size: 22px;
    color: #424041;
    display: inline-block;
    width: 140px;
    height: 30px;
    text-align: center;
    border-right: 1px solid #c2c2c2;
  }
  .detail_msg_word_datail_list li span{
    display: inline-block;
    width: 110px;
    height: 44px;
    cursor: pointer;
  }
  .detail_msg_word_datails .detail_msg_word_datail_list li span:hover{
    border-bottom: 1px solid #d50000;
  }
  .detail_msg_word_datail_list li:last-of-type {
    border-right:none ;
  }
</style>
