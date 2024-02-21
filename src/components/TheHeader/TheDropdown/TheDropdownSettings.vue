<template>
  <div class="relative">
    <BaseTooltip text="Settings">
      <button @click="toggle" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" />
      </button>
    </BaseTooltip>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95">
      <div v-show="isOpen" ref="dropdownSetting" @keydown.esc="close" tabindex="-1" :class="dropdownClasses">
        <TheDropdownSettingsMain v-if="selectedMenu === 'main'" @select-menu="showSelectedMenu" />
        <TheDropdownSettingsAppearence v-else-if="selectedMenu === 'appearence'" @select-menu="showSelectedMenu" />
      </div>
    </Transition>
  </div>
</template>

<script>
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearence from "./TheDropdownSettingsAppearence.vue";
import BaseIcon from "../../BaseIcon.vue";
import BaseTooltip from "../../BaseTooltip.vue";

export default {
  components: {
    TheDropdownSettingsMain,
    BaseIcon,
    BaseTooltip,
    TheDropdownSettingsAppearence,
  },

  data() {
    return {
      isOpen: false,
      selectedMenu: "main",
      dropdownClasses: [
        "absolute",
        "top-9",
        "z-10",
        "-right-full",
        "sm:right-0",
        "bg-white",
        "w-72",
        "border",
        "border-t-0",
        "duration-500",
      ],
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
        this.close();
      }
    });
  },

  methods: {
    showSelectedMenu(selectedMenu) {
      this.selectedMenu = selectedMenu;
      this.$refs.dropdownSetting.focus();
    },

    toggle() {
      this.isOpen ? this.close() : this.open();
    },

    open() {
      this.isOpen = true;
    },

    close() {
      this.isOpen = false;
      setTimeout(() => (this.selectedMenu = "main"), 100);
    },
  },
};
</script>
