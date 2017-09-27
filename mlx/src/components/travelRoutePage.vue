<template>
  <section >
    <div style="background-color: #f7f7f7">
      <img src="../assets/route.png" alt="">
    </div>
    <travel-route></travel-route>
  </section>
</template>


<script>
  import TravelRoute from  '@/components/homepage/travel_route'
  export default {
    name: 'travelRoutePage',
    components:{
      'travel-route':TravelRoute,


    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  div img{
    width: 100%;
  }
</style>
