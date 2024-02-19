<template>
  <a class="mb-7 group">
    <VideoItemThumbnail :index="index" />

    <VideItemInfo :index="index" />
  </a>
</template>

<script>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideItemInfo from "./VideItemInfo.vue";

export default {
  components: {
    VideoItemThumbnail,
    VideItemInfo,
  },

  props: ["index"],
};
</script>
