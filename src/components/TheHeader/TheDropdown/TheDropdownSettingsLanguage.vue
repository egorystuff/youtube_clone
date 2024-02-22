<template>
  <DropdownSettingsHeader title="Choose your language" @back="$emit('select-menu', 'main')" />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingListItem
        v-for="(language, languageId) in languages"
        :key="languageId"
        :label="language"
        :active="languageId === selectedOptions.languageId"
        @click="selectOption(languageId)" />
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
      languages: ["English", "Russian", "Belarussian"],
    };
  },

  methods: {
    selectOption(languageId) {
      this.$emit("select-option", { name: "languageId", value: languageId });
    },
  },
};
</script>
