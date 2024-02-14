<template>
  <button
    class="px-5 text-gray-600 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none">
    <BaseIcon name="search" class="w-5 h-5" />
  </button>
</template>

<script>
import BaseIcon from "../../BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
};
</script>
