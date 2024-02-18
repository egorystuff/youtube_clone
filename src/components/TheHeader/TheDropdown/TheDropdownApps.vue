<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
      <BaseIcon name="viewGrid" class="w-5 h-5" />
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95">
      <div
        v-show="isOpen"
        ref="dropdownApp"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        class="absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0 duration-500 focus:outline-none">
        <section class="py-2">
          <ul>
            <DropdownListIten label="YahTube TV" />
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <DropdownListIten label="YahTube Music" />
            <DropdownListIten label="YahTube Kids" />
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <DropdownListIten label="Creator Academy" />
            <DropdownListIten label="YahTube for Artist" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script>
import DropdownListIten from "./DropdownListIten.vue";
import BaseIcon from "../../BaseIcon.vue";

export default {
  components: {
    DropdownListIten,
    BaseIcon,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdownApp.focus());
    },
  },

  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>
