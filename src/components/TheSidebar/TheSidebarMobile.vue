<template>
  <!-- transition - animation for mobile sidebar -->

  <Transition
    enter-active-class="transition-opacity ease-linear duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-linear duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">
    <TheSidebarMobileOverlay @click="$emit('close')" v-show="isOpen" />
  </Transition>

  <Transition
    enter-active-class="transition ease-in-out duration-200 transform"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in-out duration-200 transform"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full">
    <aside
      v-show="isOpen"
      ref="mobileSidebar"
      @keydown.esc="$emit('close')"
      tabindex="-1"
      class="fixed w-64 max-h-screen overflow-auto bg-white z-40 outline-none">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button @click="$emit('close')" class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </section>
      <SidebarContent />
    </aside>
  </Transition>
</template>

<script>
import SidebarContent from "./SidebarContent.vue";
import TheSidebarMobileOverlay from "./TheSidebarMobileOverlay.vue";
import LogoMain from "../LogoMain.vue";
import BaseIcon from "../BaseIcon.vue";

export default {
  components: {
    SidebarContent,
    LogoMain,
    BaseIcon,
    TheSidebarMobileOverlay,
  },

  props: {
    isOpen: Boolean,
  },

  emits: {
    close: null,
  },

  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.mobileSidebar.focus());
    },
  },
};
</script>
