<template>
  <section>
    <div class="detail_common">
      <div><img src="./assets/price.png" alt="">费用说明</div>
      <span>|</span>
      <span>COSTS THAT</span>
    </div>
    <ul>
      <li v-for="item in priceInfo" class="price_info_list">
        <span>{{item.titleInfo}}:</span>
        <p v-for="contentInfo in item.contentInfoList ">{{contentInfo.contentInfo}}</p>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'priceInfo',
    data() {
      return {
        priceInfo:[
          {titleInfo:'费用',contentInfoList:[{contentInfo:'2480元每人，本活动不接受儿童报名，本活动最低成行人数为8人，活动上限制16人。满员截至报名，名单确认按照实际支付活动定金为准。'}]},
          {titleInfo:'备注',contentInfoList:[{contentInfo:'2节假日价格会有所上浮，以实际报价为准。'}]},
          {titleInfo:'费用包含',contentInfoList:[
            {contentInfo:'1.交通：全程正规旅游车辆，根据实际报名人数预定车辆。包含往返车费，油费，司机吃住费用。'},
            {contentInfo:'2.住宿：1晚成都登巴客栈住宿标间、2晚阿坝县城宾馆标间。'},
            {contentInfo:'3.物资：包含急救药品，对讲机，氧气瓶等。'},
            {contentInfo:'4.保险：包含一份价值60万的个人户外旅游意外保险。'},
            {contentInfo:'5.领队：专业领队全程陪同。'},
            {contentInfo:'6.门票：年宝玉则景区门票。'},
            {contentInfo:'7.其他：营地扎营管理费用。'},
          ]},
          {titleInfo:'费用不包含',contentInfoList:[
            {contentInfo:'1.交通：全程正规旅游车辆，根据实际报名人数预定车辆。包含往返车费，油费，司机吃住费用。'},
            {contentInfo:'2.住宿：1晚成都登巴客栈住宿标间、2晚阿坝县城宾馆标间。'},
            {contentInfo:'3.物资：包含急救药品，对讲机，氧气瓶等。'},
            {contentInfo:'4.保险：包含一份价值60万的个人户外旅游意外保险。'},
            {contentInfo:'5.领队：专业领队全程陪同。'},
            {contentInfo:'6.门票：年宝玉则景区门票。'},
            {contentInfo:'7.其他：营地扎营管理费用。'},
          ]},
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
  ul{
    margin-bottom: 20px;
  }
   .price_info_list{
     padding-left: 30px;
     margin-top: 40px;
    width: 100%;
    font-size: 20px;
    color: #424041;
  }
  .price_info_list span{
     font-weight:bold;
   }
  .price_info_list p{
    margin-top: 10px;
  }

</style>
