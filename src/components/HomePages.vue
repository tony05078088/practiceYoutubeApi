<template>
  <div class="container">
    <app-home-page
      v-for="page in pages.slice(pageStart, pageStart + countOfPage)"
      :key="page.id"
      :page="page"
    ></app-home-page>
  </div>
</template>

<script>
import HomePage from "./HomePage.vue";

export default {
  components: {
    appHomePage: HomePage
  },
  computed: {
    pages() {
      return this.$store.getters.pages;
    },
    pageStart() {
      return (this.$store.getters.currPage -1 ) * (this.$store.getters.countOfPage)
    },
    countOfPage() {
      return this.$store.getters.countOfPage;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width:70%;
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
