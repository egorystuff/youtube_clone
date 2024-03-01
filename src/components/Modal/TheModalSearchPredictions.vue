<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>

    <TheSearchPredictionsList :search-predictions="searchPredictions" v-model="selectedSearchPredictions" />

    <!-- можно вместо v-slot указать символ # -->
    <template v-slot:footer="slotProps">
      <BaseButton class="ml-auto" @click="slotProps.close"> Cancel </BaseButton>
      <BaseButton class="ml-1 text-gray-400 cursor-auto" disabled> Report </BaseButton>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import BaseButton from "../BaseButton.vue";
import TheSearchPredictionsList from "./TheSearchPredictionsList.vue";

export default {
  components: {
    BaseModal,
    TheSearchPredictionsList,
    BaseButton,
  },

  props: { searchPredictions: Array },

  data() {
    return {
      selectedSearchPredictions: [],
    };
  },
};
</script>
