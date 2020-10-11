<template>
  <div class="card">
    <img :src="page.pic" alt="videopic" />
    <div class="link">
      <router-link :to="`/player/${page.videoId}`">
        {{ page.title }}
      </router-link>
    </div>
    <div class="card-bottom">
      <button 
              class="btn btn-primary"
              @click= "AddFavorite">
        {{ "加入收藏" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["page"],
  methods: {
    AddFavorite() {
      const order = {
        videoId: this.page.videoId
      };
      this.$store.dispatch("AddFavorite", order);
      alert("已加入收藏頁");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 25%;
  padding-top: 20px; 
}
.card:hover {
    box-shadow: 5px 5px 10px teal ;
   }
.link {
  margin-top: 5px;
}
.card-bottom {
  margin-top: 15px ;
}

@media screen and (max-width: 800px) {
  .card {
   width: 100%;
   max-height: 5% ;
  }
}
</style>
