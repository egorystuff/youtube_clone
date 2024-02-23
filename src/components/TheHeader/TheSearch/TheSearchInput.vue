<template>
  <div class="relative w-full">
    <input
      type="text"
      placeholder="Search"
      ref="input"
      :class="classes"
      :value="query"
      @input="updateQuery($event.target.value)"
      @focus="setState(true)"
      @blur="setState(false)"
      @keyup.esc="handkeEsc"
      @click="setState(true)" />

    <button class="absolute top-0 right-0 h-full px-3 focus:outline-none" v-show="query" @click="clear">
      <BaseIcon name="x" class="w-5 h-5" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "../../BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },

  props: ["query", "hasResults"],

  emits: ["update:query", "change-state"],

  data() {
    return {
      isActive: false,
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
      this.$refs.input.focus();
    }
    document.addEventListener("keydown", this.onKeydown);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  },

  methods: {
    onKeydown(event) {
      const isInputFocused = this.$refs.input === document.activeElement;

      if (event.code === "Slash" && !isInputFocused) {
        event.preventDefault();
        this.$refs.input.focus();
      }
    },

    updateQuery(query) {
      this.$emit("update:query", query);
      this.setState(this.isActive);
    },

    setState(isActive) {
      this.isActive = isActive;
      this.$emit("change-state", isActive);
    },

    handkeEsc() {
      this.removeSelection();
      if (this.isActive && this.hasResults) {
        this.setState(false);
      } else {
        this.$refs.input.blur();
      }
    },

    removeSelection() {
      const end = this.$refs.input.value.length;
      this.$refs.input.setSelectionRange(end, end);
    },

    clear() {
      this.$refs.input.focus();
      this.updateQuery("");
    },
  },
};
</script>
