<template>
  <div class="relative">
    <img :src="`https://loremflickr.com/720/404?random=${index}`" alt="" />
    <span
      class="transition opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-sm m-1 p-1">
      <BaseIcon name="clock" class="w-5 h-5" />
    </span>
    <span
      class="transition opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-sm m-1 p-1">
      <BaseIcon name="menuAlt3" class="w-5 h-5" />
    </span>
    <span
      class="absolute group-hover:opacity-0 duration-500 bg-opacity-60 bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold"
      >6:35</span
    >
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
  props: ["index"],
};
</script>
