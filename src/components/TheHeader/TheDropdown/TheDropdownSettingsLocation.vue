<template>
  <DropdownSettingsHeader title="Choose your location" @back="$emit('select-menu', 'main')" />

  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingListItem
        v-for="(location, locationId) in locations"
        :key="locationId"
        :label="location"
        :active="locationId === selectedLocationId"
        @click="selectedLocationId = locationId" />
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
      selectedLocationId: 0,
      locations: [
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
        "United States",
        "Russia",
        "Belarus",
      ],
    };
  },
};
</script>
