<template>
  <div class="main-container">
    <div class="scrollImg"></div>

  </div>
</template>

<script>

  export default {
    data () {
      return {
      }
    },
    methods:{

    },
    created(){

    }
  }
</script>

<style scoped>
  .main-container{
    margin-top: 100px;
    background-image: url("../../assets/home_bottom.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 0%;
  }
  .scrollImg{
    background: rgba(0,0,0,0.4);
    height: 500px;
  }
</style>
