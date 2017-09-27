<template>
  <section>
    <div class="detail_common">
      <div><img src="./assets/attention.png" alt="">注意事项</div>
      <span>|</span>
      <span>ATTENTION</span>
    </div>
    <ul>
      <li v-for="item in attentionInfo" class="price_info_list">
        <span>{{item.titleInfo}}:</span>
        <p v-for="itemList in item.contentInfoList">{{itemList.contentInfo}}</p>
      </li>
    </ul>
  </section>
</template>
<script>
  export default {
    name: 'priceInfo',
    data() {
      return {
        attentionInfo:[
          {titleInfo:'装备要求',contentInfoList:[
        {contentInfo:'1、帐篷 （2人一顶）；'},
        {contentInfo:'2、背包及防雨罩（必备）；'},
        {contentInfo:'3、随身背包或者腰包（必备）；'},
        {contentInfo:'4、睡袋（必备，舒适温标-5到-10度左右）；'},
        {contentInfo:'5、防潮垫；'},
        {contentInfo:'6、头灯或手电及备用电池（必备）；'},
        {contentInfo:'7、冲锋衣裤；'},
        {contentInfo:'8、雨衣/伞；'},
        {contentInfo:'9、高帮登山鞋（必备）；最好是防水的'},
        {contentInfo:'10、沙滩鞋（途中可能涉水，必备）；'},
        {contentInfo:'11、个人换冼衣物；'},
        {contentInfo:'12、手套；'},
        {contentInfo:'13、水袋或水壶；'},
        {contentInfo:'14、登山杖；'},
        {contentInfo:'15、遮阳帽；'},
        {contentInfo:'16、太阳镜或雪镜；'},
        {contentInfo:'17、救生口哨；'},
        {contentInfo:'18、打火机/火柴；'},
        {contentInfo:'19、小 dao；'},
        {contentInfo:'20、户外炉具、餐具；'},
        {contentInfo:'21、MONEY/银行卡；'},
        {contentInfo:'22、身份证；'},
        {contentInfo:'23、垃圾袋；'},
        {contentInfo:'24、洗漱用品；'},
        {contentInfo:'25、防晒霜（SPF30以上）；'},
        {contentInfo:'26、药品 （高反，防暑）'},
      ]},
          {titleInfo:'队员要求',contentInfoList:[
            {contentInfo:'1去过高原，有重装徒步经历者'},
            {contentInfo:'2 有户外理念，不挑三挑四者'},
            {contentInfo:'3 必须是驴友'},
            {contentInfo:'4 无重大疾病 无严重高原反应者'},
            ]},
          {titleInfo:'注意事项',contentInfoList:[{contentInfo:'年宝玉则穿越平均海拔在4200米左右，有严重高反者需要提前半月服用红景天 等药物藏区，语言不通，尽量不要租用藏人马匹或者去藏民家里做客，统一听从领队指挥出现身体不适，及时向队友或者领队提出我们的领队具有中国登协户外指导员资质，红十字急救资质，领队经验6年以上。'}]},
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
  .price_info_list p{
    font-size: 18px;
  }

</style>
