<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      v-bind="$attrs"
      :class="classes"
      :value="query"
      @input="updateQuery($event.target.value)" />

    <button class="absolute top-0 right-0 h-full px-3 focus:outline-none" v-show="query" @click="updateQuery('')">
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "../../BaseIcon.vue";

export default {
  inheritAttrs: false, //отключаем стандартную передачу атрибутов(которые не указаны через пропс) корневому компоненту

  components: {
    BaseIcon,
  },

  props: ["query"],

  emits: ["update:query"],

  data() {
    return {
      classes: [
        "p-1.5",
        "px-5",
        "h-full",
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

  methods: {
    updateQuery(query) {
      this.$emit("update:query", query);
    },
  },
};
</script>
