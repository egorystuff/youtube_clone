<template>
  <DropdownSettingsHeader title="Appearance" @back="$emit('select-menu', 'main')" />

  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">Setting applies to this browser only</div>
    <ul>
      <DropdownSettingListItem
        v-for="(themeName, themeId) in themes"
        :key="themeId"
        :label="themeName"
        :active="themeId === selectedOptions.themeId"
        @click="selectOption(themeId)" />
    </ul>
  </section>
</template>

<script>
import DropdownSettingListItem from "./DropdownSettingListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  components: {
    DropdownSettingListItem,
    DropdownSettingsHeader,
  },

  props: ["selected-options"],

  emits: ["select-menu", "select-option"],

  data() {
    return {
      themes: ["Use device theme", "Dark theme", "Light theme"],
    };
  },

  methods: {
    selectOption(themeId) {
      this.$emit("select-option", { name: "themeId", value: themeId });
    },
  },
};
</script>
