<template>
  <a href="#" :class="classes">{{ category }}</a>
</template>

<script>
export default {
  props: ["category", "isActive"],

  computed: {
    classes() {
      const classes = ["px-3", "py-1", "transition", "border", "rounded-full"];

      //  bg-gray-600  border-gray-700  hover:bg-gray-500 text-whites
      return this.isActive
        ? [...classes, "bg-gray-600  border-gray-700  hover:bg-gray-500 text-white"]
        : [...classes, "bg-gray-100  border-gray-300  hover:bg-gray-200 "];
    },
  },
};
</script>
