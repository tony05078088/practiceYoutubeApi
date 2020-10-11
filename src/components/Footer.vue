<template>
 <div class="pagination">
   <ul>
       <!-- 前一頁 -->
    <li :class="{disable: (currPage === 1)}"
        @click.prevent="setPage(currPage-1)">
        <a href="#">Prev</a>
    </li>

     <!-- 按鈕可以移動到任意頁 -->
    <li v-for="n in totalPage" :key="n.id" :class="{'active': (currPage === (n))}"
      @click.prevent="setPage(n)">
     <a href="#">{{n}} </a>
    </li>
    
      <!-- 下一頁 -->
    <li :class="{disable: (currPage === totalPage)}"
    @click.prevent="setPage(currPage + 1)">
    <a href="#">Next</a>
    </li>
   </ul>

 <!-- <div class="search">
     //Filter: <input type="text" v-model="filter_name">
 </div> -->

 </div>
 
</template>

<script>
export default {
 computed: {
      filteredRows() {
      return this.$store.getters.pages
     },
     totalPage() {
      return Math.ceil(this.filteredRows.length / this.$store.getters.countOfPage)
     },
     currPage() {
      return this.$store.getters.currPage
    },
     countOfPage() {
      return this.$store.getters.countOfPage
    }
 },
 methods: {
     setPage(idx) {
     if (idx <= 0 || idx > this.totalPage) {
         return
     }
     this.$store.dispatch('changePage',idx)
     }
 } 
}
</script>

<style scoped>

</style>