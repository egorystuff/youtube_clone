<template>
  <div
    class="flex w-full h-full shadow-inner border border-gray-300 rounded-full focus:border-blue-700 focus:outline-none">
    <TheSearchInput />
    <TheSearchButton />
  </div>
</template>

<script>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";

export default {
  components: {
    TheSearchInput,
    TheSearchButton,
  },
};
</script>
