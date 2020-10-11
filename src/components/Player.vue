<template>
  <div>
    <iframe
      :src="` ${url}${id}`"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.youtube.com/embed/"
    };
  },
  computed: {
    id() {
      return this.$route.params.videoId;
    }
  }
};
</script>

<style scoped>
iframe {
 width: 520px;
 height: 315px;
 margin-top: 30px;
}    
</style>