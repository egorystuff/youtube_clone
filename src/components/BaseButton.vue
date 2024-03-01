<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        "uppercate",
        "text-sm",
        "font-medium",
        "tracking-wider",
        "py-2.5",
        "px-4",
        "mr-1",
        "focus:outline-none",
      ],
    };
  },
};
</script>
