<template>
  <input class="h-5 w-5 cursor-pointer" type="checkbox" :id="id" " />

  <label class="pl-4 cursor-pointer flex-grow" :for="id">
    <slot />
  </label>
</template>

<script>
export default {
  props: { id: Number, modelValue: Array },

  // emits: ["update:modelValue"],

  // data() {
  //   return {
  //     selectedSearchPredictions: this.modelValue,
  //   };
  // },

  // watch: {
  //   selectedSearchPredictions() {
  //     this.$emit("update:modelValue", this.selectedSearchPredictions);
  //   },
  // },
};
</script>
