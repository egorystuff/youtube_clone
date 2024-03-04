<template>
  <input type="radio" class="h-5 w-5 cursor-pointer" :id="`search-prediction-category-${id}`" />
  <label :for="`search-prediction-category-${id}`" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>

<script>
export default {
  props: { id: String, modelValue: Array },
};
</script>
