<template>
  <section >
    <div style="background-color: #f7f7f7">
      <img src="../assets/hotPlace.png" alt="">
    </div>
      <travel-hot></travel-hot>
  </section>
</template>


<script>
  import TravelHot from  '@/components/homepage/travel_hot'
  export default {
    name: 'travelHotPage',
    components:{
      'travel-hot':TravelHot,


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
