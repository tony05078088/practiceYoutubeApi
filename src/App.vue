<template>
  <div id="app">
    <div class="header">
      <router-link to="/">首頁 </router-link> |
      <router-link to="/player">播放頁</router-link> |
      <router-link to="/favorite">收藏頁</router-link> |
    </div>
    <div class="mainContent">
      <router-view></router-view>
    </div>
    <div class="footer">
    <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
  import  Footer  from "@/components/Footer";
export default {
  components: {
    appFooter : Footer
  },
  created() {
    this.$store.dispatch("getTubeApi");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
.mainContent {
  padding-bottom: 100px;
}
.header {
  padding: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: black;
  a {
    font-weight: bold;
    color: #999;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
.header , .footer {
line-height: 20px;
height: 20px;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}

@media screen and (max-width: 800px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10%;
  }
  .mainContent {
    height: 70%;
    padding: 50px auto;
  }
}
</style>
