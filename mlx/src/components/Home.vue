<template>
  <section class="home">
    <div class="home_banner">
      <span class="about_button"><a @click="routeChange(aboutCar)">了解更多详情</a></span>
    </div>
    <div class="home_content">
      <travel-hot></travel-hot>
      <travel-guide></travel-guide>
      <travel-route></travel-route>
      <home-scroll></home-scroll>
    </div>
  </section>
</template>


<script>
  import TravelHot from  '@/components/homepage/travel_hot'
  import TravelGuide from  '@/components/homepage/travel_guide'
  import TravelRoute from  '@/components/homepage/travel_route'
  import scrollImg from  '@/components/homepage/scrollImg'
  export default {
    name: 'home',
    components:{
      'travel-hot':TravelHot,
      'travel-guide':TravelGuide,
      'travel-route':TravelRoute,
      'home-scroll':scrollImg,

    },
    methods: {
      createFunc() {
      },
      routeChange(){
        this.$router.push({path:'/aboutCar'})
      }

    },
    created() {
      this.createFunc()
    },
    data() {
      return {
        pages : this.$route.pages,
        aboutCar:'/abouyCar'
      }
    }
  }
</script>
<style>
  .home_banner {
    background: url("../assets/indexnew.jpg") center;
    width: 100%;
    height: 1052px;
    background-size: cover;
    line-height: 100%;
    position: relative;
  }
</style>
