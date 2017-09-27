<template>
  <section class="public_nav">
    <ul>
      <li class="mlxLogo">
        <img src="../../assets/mlx_logo.png" alt="" >
      </li>
      <li class="mySearch">
        <input type="search" name="mlx_search" placeholder="请输入搜索文字 " class="nav_search" >
        <i class="iconfont icon-search mlx_icon_search"  ></i>
      </li>
      <li @click="routeChange(homePage)">
        首页
      </li>
      <li @click="routeChange(hotPage)" >
        热门景点
      </li>
      <li @click="routeChange(guidePage)">
        导游介绍
      </li>
      <li @click="routeChange(travelRoutePage)">
        推荐路线
      </li>
      <li  @click="routeChange(aboutCar)">
        悦动美丽行景点通
      </li>
      <li>
        关于我们
      </li>
      <li>
        联系我们
      </li>
    </ul>

  </section>
</template>

<script>
  export default {
    name: 'nav',
    data() {
      return {
        pageImgSrc:'',
        isclick :true,
        homePage: '/home',
        hotPage: '/hotPage',
        guidePage: '/guidePage',
      travelRoutePage:'/travelRoutePage',
        aboutCar:'/aboutCar',
      }
    },
    methods: {
      createFunc() {

      },
      routeChange(route) {
        this.$router.push({path: route,query :{pages: route}})
      },

    },
    created() {
      this.createFunc()
    }
  }
</script>
<style>
  .public_nav{
    position: fixed;
    z-index: 22;
  }
  .public_nav ,.public_nav ul{
    width: 100%;
    text-align: center;
    line-height: 64px;
    font-size: 1rem;
    background-color: #000000;
    opacity: 0.8;
    color: #fff;
    height: 64px;

  }
  .public_nav ul li{
    display: inline-block;
    width: 10%;
    cursor: pointer;
  }
  .mlxLogo{
    position: relative;
  }
  .mlxLogo img{
    width: 100%;
    position: absolute;
    top: -14px;
    left: 8px;
  }
  .nav_search {
    border-radius: 14px;
    display: inline-block;
    width: 80%;
    height: 32px;
    padding-left: 14%;
    background-color: #424041;
    outline: none;
    color: #ffffff;
  }

  ul li input[type="search"]:focus i {
    display: none;
  }

  .mySearch{
    position: relative;
    left: 2%;
  }
  .mlx_icon_search {
    position: absolute;
    left:14%;
  }

</style>
