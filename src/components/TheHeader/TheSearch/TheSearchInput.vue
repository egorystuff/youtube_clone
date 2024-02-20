<template>
  <input :class="classes" type="text" placeholder="Введите запрос" />
</template>

<script>
export default {
  data() {
    return {
      classes: [
        "p-1.5",
        "px-5",
        "w-full",
        "border",
        "border-gray-300",
        "rounded-l-full",
        "focus:border-blue-700",
        "focus:outline-none",
      ],
    };
  },

  mounted() {
    if (window.innerWidth < 640) {
      this.$el.focus();
    }
  },
};
</script>
