<template>
  <div class="relative -mt-1 ml-auto">
    <button
      @click="isOpen = !isOpen"
      class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
      <BaseIcon name="dotsVertical" class="w-6 h-6" />
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
        ref="dropdownSetting"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        class="absolute top-9 -right-full sm:right-0 bg-white w-52 rounded shadow duration-500">
        <section class="py-2">
          <ul>
            <VideoItemDropdownListItem label="Add to queue" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
import VideoItemDropdownListItem from "./VideoItemDropdownListItem.vue";

export default {
  components: {
    BaseIcon,
    VideoItemDropdownListItem,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdownSetting.focus());
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
