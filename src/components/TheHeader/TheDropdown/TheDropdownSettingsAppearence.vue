<template>
  <DropdownSettingsHeader title="Appearance" @back="$emit('select-menu', 'main')" />

  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">Setting applies to this browser only</div>
    <ul>
      <DropdownSettingListIten
        v-for="(theme, themeId) in themes"
        :key="themeId"
        :label="theme"
        :active="themeId === selectedThemeId"
        @click="selectedThemeId = themeId" />
    </ul>
  </section>
</template>

<script>
import DropdownSettingListIten from "./DropdownSettingListIten.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

export default {
  components: {
    DropdownSettingListIten,
    DropdownSettingsHeader,
  },

  emits: ["select-menu"],

  data() {
    return {
      selectedThemeId: 0,
      themes: ["Use device theme", "Dark theme", "Light theme"],
    };
  },
};
</script>
