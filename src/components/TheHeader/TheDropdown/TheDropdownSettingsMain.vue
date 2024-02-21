<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingListIten
        v-for="listItem in listItems.slice(0, 8)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="$emit('select-menu', 'appearence')" />
    </ul>
  </section>

  <section class="py-2">
    <ul>
      <DropdownSettingListIten :label="listItems[8].label" :with-sub-menu="listItems[8].withSubMenu" />
    </ul>
  </section>
</template>

<script>
import DropdownSettingListIten from "./DropdownSettingListIten.vue";

export default {
  components: {
    DropdownSettingListIten,
  },

  emets: ["select-menu"],

  data() {
    return {
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
};
</script>
