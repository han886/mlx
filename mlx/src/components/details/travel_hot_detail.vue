<template>
  <section class="travel_hot_detail" style="background-color: #f7f7f7">
    <img src="../../assets/route.png" alt="">
    <div class="travel_hot_content">
      <div class="TH_detail_content" style="background-color: #f7f7f7">
        <div class="detail_msg">
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
            <div class="hot_detail_msg_word_top">
              <span class="detail_msg_name">陕西皇陵国家森林公园</span>
              <span class="detail_msg_address">地址：陕西延安黄陵县点头店头镇00000</span>
              <span class="detail_msg_tel">电话：123456789</span>
              <i></i>
            </div>
            <div class="detail_msg_word_content">
              <span class="detail_msg_word_ticket">陕西皇陵国家森林公园门票</span>
              <el-table :data="dateTest" border style="width: 500px">
                <el-table-column prop="price" label="市场价" width="126px">
                </el-table-column>
                <el-table-column label="单人出行">
                  <el-table-column prop="discount" label="持卡人" width="116px" class="tableRed"></el-table-column>
                </el-table-column>
                <el-table-column>
                  <el-table-column prop="haska" label="持卡" width="146px" class="tableRed"></el-table-column>
                  <el-table-column prop="follow" label="随行人员" width="110px" class="tableRed"></el-table-column>
                </el-table-column>
              </el-table>
              <span class="detail_msg_word_tip">提示：1.会员有随行的情况下首次享受免票政策，之后一律7折。 2.会员单人出行只可享受7折优惠</span>
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
      <div class="detail_ticket">
        <div class="detail_ticket_inner"  style="background-color: #ffffff">
          <div class="detail_common">
            <div><img src="../../assets/ticket.png" alt="">订票须知</div>
            <span>|</span>
            <span>BOOK INFORMATION</span>
          </div>
          <ul class="detail_ticket_content">
            <li>1.开放时间：<br>09:00-17:30
            </li>
            <li>2.入园凭证：<br>美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行</li>
            <li>3.温馨提示：<br>美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行</li>
          </ul>
        </div>
      </div>
      <div class="detail_Scenic">
        <div class="detail_Scenic_inner" style="background-color: #ffffff">
          <div class="detail_common">
            <div><img src="../../assets/place.png" alt="">景点介绍</div>
            <span>|</span>
            <span>SCENIC SPOTS</span>
          </div>
          <div class="detail_Scenic_content">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行</span>
            <img src="../../assets/ticket_intro1.jpg" alt="">
            <img src="../../assets/route.png" alt="">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行</span>
            <img src="../../assets/ticket_intro2.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


  export default {
    name: 'tavelHotDetail',
    components: {
    },
    watch: {
      '$route.query': function () {
        this.hotDetailId = this.$route.query.hotDetailId
        this.getId()
      }
    },
    data() {
      return {
        hotDetailId: '',
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
        dateTest: [{
          price: 100,
          discount: '单人七折',
          haska: '首次免费以后7折',
          follow: '7折'
        }],
        dialogVisible: false


      }
    },
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
//      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    },
    methods: {
      createFunc() {
        this.hotDetailId = this.$route.query.hotDetailId,
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
      getId() {
        //获取id zhih
//        window.console.log('这个页面每次都有输出的id 在这不  ' + this.hotDetailId);
      },

    },
    created() {
      this.createFunc();
    }
  }
</script>
<style>
  .travel_hot_detail {
    width: 100%;
    /*height: 1000px;*/

  }

  .travel_hot_content {
    width: 100%;
    height: 2736px;
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

  .hot_detail_msg_word_top {
    width: 100%;
    height: 110px;
    color: #424041;
  }

  .hot_detail_msg_word_top span {
    display: block;
    width: 100%;
  }

  .detail_msg_name {
    font-size: 30px;
  }

  .detail_msg_address, .detail_msg_tel {
    font-size: 20px;
  }

  .detail_msg_word_top i {
    display: block;
    width: 490px;
    float: left;
    border-bottom: 1px dashed #b6b6b6;
    margin-top: 4px;
  }

  /*中间信息右边中间*/
  .detail_msg_word_content {
    width: 580px;
    height: 192px;
    margin-top: 4px;
    text-align: center;

  }

  .detail_msg_word_ticket {
    display: block;
    font-size: 20px;
    color: #424041;
    margin-bottom: 8px;
    text-align: left;
  }

  .TH_detail_content .detail_msg_word .detail_msg_word_content .el-table__body-wrapper .el-table_1_column_2_column_3 .cell, .TH_detail_content .detail_msg_word .detail_msg_word_content .el-table__body-wrapper .el-table_1_column_4_column_5 .cell, .TH_detail_content .detail_msg_word .detail_msg_word_content .el-table__body-wrapper .el-table_1_column_4_column_6 .cell {
    color: #d50000;
  }

  .detail_msg_word_content .detail_msg_word_tip {
    display: block;
    width: 100%;
    font-size: 12px;
    color: #949494;
    float: left;
    text-align: left;
    margin-top: 10px;
  }

  .detail_msg_word_content .detail_msg_word_buy {
    margin-top: 18px;
    display: block;
    width: 519px;
    height: 70px;
    float: left;
    background-color: #fdf0f0;
  }

  .detail_msg_word_content .detail_msg_word_buy .detail_msg_word_buy_car {
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

  .detail_msg_word_content .detail_msg_word_buy .detail_msg_word_buy_price {
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

  .detail_msg_word_content .detail_msg_word_buy .detail_msg_word_buy_price_b {
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

  /*book ticket*/
  .detail_ticket, .detail_Scenic {
    width: 100%;
    margin-top: 20px;
  }

  .detail_ticket {
    height: 412px;
  }

  .detail_ticket_inner, .detail_Scenic_inner {
    position: absolute;
    width: 1020px;
    left: 50%;
    margin-left: -510px;
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  .detail_ticket_inner {
    height: 412px;
  }

  /*公共头类*/
  .detail_common {
    height: 58px;
    width: 100%;
  }

  .detail_common img {
    width: 35px;
    height: 31px;
    line-height: 58px;
  }

  .detail_common span {
    display: inline-block;
    height: 58px;
    line-height: 58px;
  }

  .detail_common div {
    position: relative;
    width: 160px;
    height: 58px;
    text-align: right;
    display: inline-block;
    margin-left: 12px;
    font-size: 30px;
    color: #424041;
    border-bottom: 1px solid #d50000;
  }

  .detail_common div img {
    padding-right: 4px;
    position: absolute;
    top: 8px;
    left: 6px;

  }

  .detail_common span:nth-of-type(1) {
    font-size: 30px;
    color: #959595;
  }

  .detail_common span:nth-of-type(2) {
    font-size: 18px;
    color: #424041;
  }

  .detail_ticket_content {
    margin-top: 20px;
  }

  .detail_ticket_content li {
    padding: 0 20px;
    width: 100%;
    height: 110px;
    overflow: hidden;
    font-size: 16px;
    color: #6f6f6f;
  }

  .detail_Scenic, .detail_Scenic_inner {
    height: 1888px;
    margin-bottom: 20px;
  }
  .detail_Scenic_content{
    text-align: center;
  }
  .detail_Scenic_content span{
    text-align: left;
    margin-top: 40px;
    display: block;
    font-size: 16px;
    color: #424041;
    padding:0 60px;
  }
  .detail_Scenic_content img{
    width: 896px;
    height: 482px;
    margin-top: 10px;
  }
</style>
