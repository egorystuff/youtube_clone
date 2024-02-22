<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingListItem
        v-for="listItem in listItems.slice(0, 8)"
        :key="listItem.label"
        :label="listItem.label"
        :icon="listItem.icon"
        :with-sub-menu="listItem.withSubMenu"
        @click.stop="selectMenu(listItem)" />
    </ul>
  </section>

  <section class="py-2">
    <ul>
      <DropdownSettingListItem
        :label="listItems[8].label"
        :icon="listItems[8].icon"
        :with-sub-menu="listItems[8].withSubMenu"
        @click.stop="selectMenu(listItems[8])" />
    </ul>
  </section>
</template>

<script>
import DropdownSettingListItem from "./DropdownSettingListItem.vue";

export default {
  components: {
    DropdownSettingListItem,
  },

  props: ["selected-options"],

  emits: ["select-menu", "select-option"],

  data() {
    return {
      listItems: [
        { id: "appearence", label: "Appearance: Light", icon: "sun", withSubMenu: true },
        { id: "language", label: "Language: English", icon: "translate", withSubMenu: true },
        { id: "location", label: "Location: Belarus", icon: "globeAlt", withSubMenu: true },
        { id: "settings", label: "Settings", icon: "cog", withSubMenu: false },
        { id: "your_data_in_youtube", label: "Your data in YahTube", icon: "shieldCheck", withSubMenu: false },
        { id: "help", label: "Help", icon: "questionMarkCircle", withSubMenu: false },
        { id: "send_feedback", label: "Send feedback", icon: "chatAlt", withSubMenu: false },
        { id: "keyboard_shortcuts", label: "Keyboard shortcuts", icon: "calculator", withSubMenu: false },
        { id: "restricted_mode", label: "Restricted Mode: Off", icon: null, withSubMenu: true },
      ],
    };
  },

  methods: {
    selectMenu(listItem) {
      if (listItem.withSubMenu) this.$emit("select-menu", listItem.id);
    },
  },
};
</script>
