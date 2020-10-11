<template>
         <div class="card">
    <!-- <img :src="page.pic" alt="videopic" /> -->
     <iframe
      :src="`${url}${id}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
    <div>
        {{ page.title }}
        {{page.videoId}}
    </div>
  
  </div>
  
</template>

<script>
export default {
 props: ["page"],
  data() {
    return {
      url: "https://www.youtube.com/embed/",
      id: this.page.id

    };
  },
  computed: {
    ids() {
      return this.$store.page.videoId;
    }
  }
}
</script>

<style scoped>
 .card {
   width: 25%;
   padding-top: 20px;
   margin-right: 20px;
 }
 iframe {
 width: 520px;
 height: 315px;
 margin-top: 30px;
}    
</style>