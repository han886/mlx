<template>
  <div id="app" style="background: #f7f7f7">
    <app-nav></app-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-footer></app-footer>
    <a href="#"><img src="" alt=""></a>
  </div>
</template>

<script>
  import AppNav from '@/components/public/nav'
  import AppFooter from '@/components/public/footer'

  export default {
    name: 'app',
    components: {
      'app-nav': AppNav,
      'app-footer': AppFooter
    },
    methods: {
      createFunc() {

      }
    },
      created() {
        this.createFunc()
      }
    }
</script>

<style>
  #app {

  }

</style>
