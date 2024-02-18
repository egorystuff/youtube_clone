<template>
  <div class="relative">
    <img :src="`https://loremflickr.com/720/404?random=${index}`" alt="" />

    <VideoItemThambnailButton icon="clock" label="Watch later" class="top-0" />
    <VideoItemThambnailButton icon="menuAlt3" label="Add to queue" class="top-8" />

    <span
      class="absolute group-hover:opacity-0 duration-500 bg-opacity-60 bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold"
      >6:35</span
    >
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
import VideoItemThambnailButton from "./VideoItemThambnailButton.vue";

export default {
  components: {
    BaseIcon,
    VideoItemThambnailButton,
  },
  props: ["index"],
};
</script>
