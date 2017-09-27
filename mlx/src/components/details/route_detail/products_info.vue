<template>
  <section>
    <div class="product_tip">
      亮点：<span>年保玉则-《中国国家地理》评选为中国大香格里拉旅游重点景区十大精品之一</span>
    </div>
    <div>
      <div class="detail_product_inner" style="background-color: #ffffff">
        <div class="detail_common">
          <div><img src="./assets/product_info.png" alt="">产品介绍</div>
          <span>|</span>
          <span>PRODUCT INTRODUCION</span>
        </div>
        <div class="detail_product_content">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行</span>
          <img src="./assets/product_detail.png" alt="">
         <img src="./assets/product_detail1.png"/>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行美丽行</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'products_info',
    data() {
      return {}
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
  .product_tip{
    margin: 10px 40px ;
    font-size: 20px;
    color: #424041;
  }
  .product_tip span{
    display: block;
    width: 900px;
    height: 55px;
    border: 1px dashed #ff7a7a;
    font-size: 18px;
    color: #ccc;
    padding-left: 20px;
    overflow: hidden;
    line-height: 55px;
  }
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

  .detail_product_content {
    margin-top: 20px;
    font-size: 20px;
  }

  .detail_product_content li {
    padding: 0 20px;
    width: 100%;
    height: 110px;
    overflow: hidden;
    font-size: 16px;
    color: #6f6f6f;
  }

   .detail_product_inner {
    margin-bottom: 20px;
  }
  .detail_product_content{
    text-align: center;
  }
  .detail_product_content span{
    text-align: left;
    margin-top: 40px;
    display: block;
    font-size: 20px;
    color: #6f6f6f;
    padding:0 44px;
  }
  .detail_product_content img{
    width: 896px;
    height: 482px;
    margin-top: 10px;
  }
</style>
