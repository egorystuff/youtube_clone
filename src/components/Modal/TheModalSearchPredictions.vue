<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>

    <TheSearchPredictionsList v-model="selectedSearchPredictions" :search-predictions="searchPredictions" />

    <!-- можно вместо v-slot указать символ # -->
    <template v-slot:footer="slotProps">
      <button :class="closeButton" @click="slotProps.close">Cancel</button>
      <button :class="reportButton" disabled>Report</button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal.vue";
import TheSearchPredictionsList from "./TheSearchPredictionsList.vue";

export default {
  components: {
    BaseModal,
    TheSearchPredictionsList,
  },

  data() {
    return {
      selectedSearchPredictions: [],
      searchPredictions: [
        "new york",
        "new york song",
        "new york alicia keys",
        "new york state of mind",
        "new york accent",
        "new york nagaram whatsapp status",
        "new york song tik tok",
        "new york new york frank sinatra",
        "new york nagaram",
        "new york jazz",
        "new york full movie",
        "new york vlog",
        "new york jay z",
      ],

      closeButton: [
        "uppercate",
        "text-sm",
        "font-medium",
        "tracking-wider",
        "py-2.5",
        "px-4",
        "ml-auto",
        "mr-1",
        "focus:outline-none",
      ],

      reportButton: [
        "uppercate",
        "text-sm",
        "font-medium",
        "tracking-wider",
        "py-2.5",
        "px-4",
        "ml-1",
        "mr-1",
        "focus:outline-none",
        "text-gray-400",
        "cursor-auto",
      ],
    };
  },
};
</script>
