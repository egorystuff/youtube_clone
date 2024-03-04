<template>
  <textarea
    v-model="searchPredictionDetails"
    placeholder="Provide additional details (optional)"
    class="border rounded-sm pt-2 pb-5 px-2 resize-none w-full focus:outline-none" />
</template>

<script>
export default {
  props: { modelValue: Array },

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
};
</script>
