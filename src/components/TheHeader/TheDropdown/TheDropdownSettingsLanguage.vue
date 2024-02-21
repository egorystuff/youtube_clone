<template>
  <DropdownSettingsHeader title="Choose your language" @back="$emit('select-menu', 'main')" />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingListItem
        v-for="(language, languageId) in languages"
        :key="languageId"
        :label="language"
        :active="languageId === selectedLanguageId"
        @click="selectedLanguageId = languageId" />
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

  emits: ["select-menu"],

  data() {
    return {
      selectedLanguageId: 0,
      languages: ["English", "Russian", "Belarussian"],
    };
  },
};
</script>
