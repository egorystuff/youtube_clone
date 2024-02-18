<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
      <BaseIcon name="dotsVertical" class="w-5 h-5" />
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
        class="absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0 duration-500">
        <section class="py-2 border-b">
          <ul>
            <DropdownSettingListIten
              v-for="listItem in listItems.slice(0, 8)"
              :key="listItem.label"
              :label="listItem.label"
              :icon="listItem.icon"
              :with-sub-menu="listItem.withSubMenu" />
          </ul>
        </section>

        <section class="py-2">
          <ul>
            <DropdownSettingListIten :label="listItems[8].label" :with-sub-menu="listItems[8].withSubMenu" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script>
import DropdownSettingListIten from "./DropdownSettingListIten.vue";
import BaseIcon from "../../BaseIcon.vue";

export default {
  components: {
    DropdownSettingListIten,
    BaseIcon,
  },

  data() {
    return {
      isOpen: false,
      listItems: [
        { label: "Appearance: Light", icon: "sun", withSubMenu: true },
        { label: "Language: English", icon: "translate", withSubMenu: true },
        { label: "Location: Belarus", icon: "globeAlt", withSubMenu: true },
        { label: "Settings", icon: "cog", withSubMenu: false },
        { label: "Your data in YahTube", icon: "shieldCheck", withSubMenu: false },
        { label: "Help", icon: "questionMarkCircle", withSubMenu: false },
        { label: "Send feedback", icon: "chatAlt", withSubMenu: false },
        { label: "Keyboard shortcuts", icon: "calculator", withSubMenu: false },
        { label: "Restricted Mode: Off", icon: null, withSubMenu: true },
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
        this.isOpen = false;
      }
    });
  },
};
</script>
