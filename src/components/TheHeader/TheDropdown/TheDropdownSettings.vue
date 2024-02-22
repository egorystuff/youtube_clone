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
        <component
          v-if="selectedMenu"
          :is="menu"
          :selected-options="selectedOptions"
          @select-option="selectOption"
          @close="closeMenu" />

        <TheDropdownSettingsMain v-else :menu-items="menuItems" @select-menu="selectMenu" />
      </div>
    </Transition>
  </div>
</template>

<script>
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearence from "./TheDropdownSettingsAppearence.vue";
import TheDropdownSettingsLanguage from "./TheDropdownSettingsLanguage.vue";
import TheDropdownSettingsLocation from "./TheDropdownSettingsLocation.vue";
import TheDropdownSettingsRestrictMode from "./TheDropdownSettingsRestrictMode.vue";
import BaseIcon from "../../BaseIcon.vue";
import BaseTooltip from "../../BaseTooltip.vue";

export default {
  components: {
    TheDropdownSettingsMain,
    BaseIcon,
    BaseTooltip,
    TheDropdownSettingsAppearence,
    TheDropdownSettingsLanguage,
    TheDropdownSettingsLocation,
    TheDropdownSettingsRestrictMode,
  },

  data() {
    return {
      isOpen: false,
      selectedMenu: null,
      selectedOptions: {
        theme: { id: 0, text: "Device theme" },
        language: { id: 0, text: "English" },
        location: { id: 0, text: "Belarus" },
        restrictedMode: { enabled: false, text: "Off" },
      },

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

  computed: {
    menu() {
      const menuComponentsName = {
        appearence: "TheDropdownSettingsAppearence",
        language: "TheDropdownSettingsLanguage",
        location: "TheDropdownSettingsLocation",
        restricted_mode: "TheDropdownSettingsRestrictMode",
      };

      return this.selectedMenu ? menuComponentsName[this.selectedMenu.id] : null;
    },

    menuItems() {
      return [
        { id: "appearence", label: "Appearance: " + this.selectedOptions.theme.text, icon: "sun", withSubMenu: true },
        {
          id: "language",
          label: "Language: " + this.selectedOptions.language.text,
          icon: "translate",
          withSubMenu: true,
        },
        {
          id: "location",
          label: "Location: " + this.selectedOptions.location.text,
          icon: "globeAlt",
          withSubMenu: true,
        },
        { id: "settings", label: "Settings", icon: "cog", withSubMenu: false },
        { id: "your_data_in_youtube", label: "Your data in YahTube", icon: "shieldCheck", withSubMenu: false },
        { id: "help", label: "Help", icon: "questionMarkCircle", withSubMenu: false },
        { id: "send_feedback", label: "Send feedback", icon: "chatAlt", withSubMenu: false },
        { id: "keyboard_shortcuts", label: "Keyboard shortcuts", icon: "calculator", withSubMenu: false },
        {
          id: "restricted_mode",
          label: "Restricted Mode: " + this.selectedOptions.restrictedMode.text,
          icon: null,
          withSubMenu: true,
        },
      ];
    },
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
    toggle() {
      this.isOpen ? this.close() : this.open();
    },

    open() {
      this.isOpen = true;
    },

    close() {
      this.isOpen = false;
      setTimeout(this.closeMenu, 100);
    },

    selectMenu(menuItem) {
      this.selectedMenu = menuItem;
      this.$refs.dropdownSetting.focus();
    },

    closeMenu() {
      this.selectMenu(null);
    },

    selectOption(option) {
      this.selectedOptions[option.name] = option.value;
    },
  },
};
</script>
