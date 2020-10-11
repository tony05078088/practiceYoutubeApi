<template>
  <div class="container">
    <app-favorite
      v-for="page in pages"
      :key="page.id"
      :page="page"
    ></app-favorite>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Favorite from '@/components/Portfolio/Favorite.vue'

export default {
    computed: {
 ...mapGetters({
    pages: 'pagePortfolio'
 }),
 pages() {
  return this.$store.getters.pagePortfolio
}
    },
    components: {
        appFavorite: Favorite
    }
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>