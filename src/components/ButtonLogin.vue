<template>
  <button :class="classes">
    <BaseIcon name="user" class="w-7 h-7 mr-2" />
    Sign In
  </button>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },

  computed: {
    classes() {
      return (
        this.$attrs.class ||
        "flex items-center whitespace-nowrap px-3 py-1 text-sm text-blue-700 uppercase border border-blue-700 rounded-full focus:outline-none"
      );
    },
  },
};
</script>
