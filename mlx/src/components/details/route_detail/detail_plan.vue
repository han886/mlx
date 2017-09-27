<template>
  <section>
    <div>
      <div class="detail_important_inner" style="background-color: #ffffff">
        <div class="detail_common">
          <div><img src="./assets/detail_plan.png" height="27" width="27"/>详情安排</div>
          <span>|</span>
          <span>PRODUCT INTRODUCION</span>
        </div>
      </div>
      <div class="day_plan">
        <div class="day_plan_total">
          行程天数：3天2晚
        </div>
        <ul style="background: #ffffff;">
          <li v-for="item in planDay" class="day_plan_total_start">
            <div>第<span class="day_plan_total_start_dayth">{{item.dayth}}</span>天
              {{item.day}}
            </div>
            <ul class="day_plan_total_details">
              <li v-for="details in item.details" class="day_plan_total_detail">
                <img :src = "details.ImgSrc" alt="">
                <span>{{details.detailPlan}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'detail_plan',
    data() {
      return {
        planDay:[
          {
            dayth:'1',
            day:'成都广州——',
            details:[
              {  detailPlan:'今日全国各地的队友将来到成都集合，统一入住途途游为你精心安排的酒店，领队会前来和队员汇合开一个短暂行前会事宜，也初步沟通培养下大家的感情和了解大家的身体状况。如果您的时间比较宽裕，还可以自行安排在成都市区的旅游活动，推荐游览锦里、武侯祠、杜甫草堂、宽窄巷子等景点，品尝成都特色美食，感受天府之国的休闲生活。若您时间足够充裕，也可到黄龙溪古镇或熊猫基地游览参观，赏川西古镇美景，与国宝大熊猫来一次亲密接触', ImgSrc: require('./assets/day_total.png')},
              {   detailPlan:'【住宿说明】成都市区酒店标间',ImgSrc: require('./assets/liveInfo.png')},
              { detailPlan:'【今日路程】车程500KM，预计行程10小时',ImgSrc:require('./assets/dayJourney.png')},
              { detailPlan:'【餐饮安排】早餐（不含）；午餐（不含）；晚餐（不含）',ImgSrc:require('./assets/eatPlan.png')},
              { detailPlan:'【海拔高度】550M',ImgSrc: require('./assets/altitude.png')},
              { detailPlan:'【今日特色】成都市区放任一日游',ImgSrc: require('./assets/special.png')},
              { detailPlan:'【温馨提示】成都是一座来了就不想走的城市，是一座吃货之都。为了后面的行程和大家身体状况考虑，不可玩得太嗨，不可喝的太多，不可睡得太晚。',ImgSrc:require('./assets/warmthTip.png')}
            ],
          },
          {
            dayth:'2',
            day:'成都广州——',
            details:[
              {  detailPlan:'今日全国各地的队友将来到成都集合，统一入住途途游为你精心安排的酒店，领队会前来和队员汇合开一个短暂行前会事宜，也初步沟通培养下大家的感情和了解大家的身体状况。如果您的时间比较宽裕，还可以自行安排在成都市区的旅游活动，推荐游览锦里、武侯祠、杜甫草堂、宽窄巷子等景点，品尝成都特色美食，感受天府之国的休闲生活。若您时间足够充裕，也可到黄龙溪古镇或熊猫基地游览参观，赏川西古镇美景，与国宝大熊猫来一次亲密接触', ImgSrc: require('./assets/day_total.png')},
              {   detailPlan:'【住宿说明】成都市区酒店标间',ImgSrc: require('./assets/liveInfo.png')},
              { detailPlan:'【今日路程】车程500KM，预计行程10小时',ImgSrc:require('./assets/dayJourney.png')},
              { detailPlan:'【餐饮安排】早餐（不含）；午餐（不含）；晚餐（不含）',ImgSrc:require('./assets/eatPlan.png')},
              { detailPlan:'【海拔高度】550M',ImgSrc: require('./assets/altitude.png')},
              { detailPlan:'【今日特色】成都市区放任一日游',ImgSrc: require('./assets/special.png')},
              { detailPlan:'【温馨提示】成都是一座来了就不想走的城市，是一座吃货之都。为了后面的行程和大家身体状况考虑，不可玩得太嗨，不可喝的太多，不可睡得太晚。',ImgSrc:require('./assets/warmthTip.png')}
            ],
          },
          {
            dayth:'3',
            day:'成都广州——',
            details:[
              {  detailPlan:'今日全国各地的队友将来到成都集合，统一入住途途游为你精心安排的酒店，领队会前来和队员汇合开一个短暂行前会事宜，也初步沟通培养下大家的感情和了解大家的身体状况。如果您的时间比较宽裕，还可以自行安排在成都市区的旅游活动，推荐游览锦里、武侯祠、杜甫草堂、宽窄巷子等景点，品尝成都特色美食，感受天府之国的休闲生活。若您时间足够充裕，也可到黄龙溪古镇或熊猫基地游览参观，赏川西古镇美景，与国宝大熊猫来一次亲密接触', ImgSrc: require('./assets/day_total.png')},
              {   detailPlan:'【住宿说明】成都市区酒店标间',ImgSrc: require('./assets/liveInfo.png')},
              { detailPlan:'【今日路程】车程500KM，预计行程10小时',ImgSrc:require('./assets/dayJourney.png')},
              { detailPlan:'【餐饮安排】早餐（不含）；午餐（不含）；晚餐（不含）',ImgSrc:require('./assets/eatPlan.png')},
              { detailPlan:'【海拔高度】550M',ImgSrc: require('./assets/altitude.png')},
              { detailPlan:'【今日特色】成都市区放任一日游',ImgSrc: require('./assets/special.png')},
              { detailPlan:'【温馨提示】成都是一座来了就不想走的城市，是一座吃货之都。为了后面的行程和大家身体状况考虑，不可玩得太嗨，不可喝的太多，不可睡得太晚。',ImgSrc:require('./assets/warmthTip.png')}
            ],
          },

        ]
      }
    },
    methods: {
      createFunc() {
      },
    },
    created() {
      this.createFunc()
    }
  }
</script>
<style>

  .detail_common {
    margin-left: 20px;
    height: 58px;
    width: 100%;
  }

  .detail_common img {
    width: 35px;
    height: 31px;
    line-height: 58px;
    padding-right: 4px;
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
  .detail_important_inner {
    margin: 20px 0;
    font-size: 20px;
  }
  .detail_important_content li {
    padding: 0 20px;
    width: 100%;
    height: 110px;
    overflow: hidden;
    font-size: 16px;
    color: #6f6f6f;
  }
  .detail_important_content span{
    text-align: left;
    margin-top: 40px;
    display: block;
    font-size: 20px;
    color: #6f6f6f;
    padding:0 44px;
  }
  .detail_important_content img{
    width: 896px;
    height: 482px;
    margin-top: 10px;
  }
  .day_plan_total{
    margin-left: 20px;
    width: 900px;
    line-height: 56px;
    background-color: #f4f3f3;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    font-size: 20px;
    color: #424041;
    padding-left: 20px;
  }
  .day_plan_total ul li{
    height: 700px;
    width: 100%;
  }
  .day_plan_total_start{
    width: 834px;
    height: 766px;
    border: 1px solid #dcdcdc;
    margin: 20px 0  20px 90px;
  }
  .day_plan_total_start .day_plan_total_start_dayth{
    font-size: 30px;
    color: #d50000;
    padding: 4px;
  }
  .day_plan_total_start div{
    padding-left: 20px;
    width: 100%;
    background-color: #dcdcdc;
    font-size: 20px;
    color: #2c2c2c;
  }
  .day_plan_total_start .day_plan_total_details{
    margin-top: 80px;
  }
  .day_plan_total_details li{
    margin: 20px 0 0 60px;
    padding-left: 40px;
    border-left: 1px solid #d50000;
    position: relative;
    font-size: 20px;
    color: #6f6f6f;
    padding-bottom: 10px;
  }
  .day_plan_total_details li img{
    position: absolute;
    top: -20px;
    left: -20px;
    width: 40px;
    height: 40px;
  }
  .day_plan_total_start .day_plan_total_details li:nth-of-type(1){
    background-color: #f7f7f7;
  }
  .day_plan_total_start .day_plan_total_details li:nth-last-of-type(1){
    border-left: none ;
  }
</style>
