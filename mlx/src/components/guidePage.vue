<template>
  <section >
    <div style="background-color: #f7f7f7">
      <img src="../assets/guide.png" alt="">
    </div>
    <travel-guide></travel-guide>
  </section>
</template>


<script>
  import TravelGuide from  '@/components/homepage/travel_guide'
  export default {
    name: 'guidePage',
    components:{
      'travel-guide':TravelGuide,


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
