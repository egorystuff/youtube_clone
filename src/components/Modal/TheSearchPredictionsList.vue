<template>
  <div class="space-y-3 text-black text-base mt-5">
    <div class="flex items-center" v-for="(label, index) in searchPredictions" :key="label">
      <input
        class="h-5 w-5 cursor-pointer"
        type="checkbox"
        :id="index"
        :value="label"
        v-model="selectedSearchPredictions" />
      <label class="pl-4 cursor-pointer flex-grow" :for="index">{{ label }}</label>
    </div>
  </div>
</template>

<script>
import BaseModal from "./BaseModal.vue";

export default {
  components: {
    BaseModal,
  },

  props: { searchPredictions: Array, modelValue: Array },

  emits: ["update:modelValue"],

  data() {
    return {
      selectedSearchPredictions: this.modelValue,
    };
  },

  watch: {
    selectedSearchPredictions() {
      this.$emit("update:modelValue", this.selectedSearchPredictions);
    },
  },
};
</script>
