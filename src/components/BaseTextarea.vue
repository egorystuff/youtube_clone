<template>
  <div class="relative">
    <textarea
      :maxlength="limit"
      ref="textarea"
      @input="adjustHeight"
      v-model="searchPredictionDetails"
      placeholder="Provide additional details (optional)"
      class="border rounded-sm pt-2 pb-8 px-2 resize-none w-full focus:outline-none overflow-hidden peer" />

    <div class="absolute bottom-2 right-2 text-xs text-gray-600 peer-focus:text-black">{{ counter }}</div>
  </div>
</template>

<script>
export default {
  props: { modelValue: Array, limit: Number },

  emits: ["update:modelValue"],

  data() {
    return {
      searchPredictionDetails: this.modelValue,
    };
  },

  watch: {
    searchPredictionDetails() {
      this.$emit("update:modelValue", this.searchPredictionDetails);
    },
  },

  computed: {
    counter() {
      return `${this.modelValue.length} / ${this.limit}`;
    },
  },

  mounted() {
    this.adjustHeight();
  },

  methods: {
    adjustHeight() {
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    },
  },
};
</script>
