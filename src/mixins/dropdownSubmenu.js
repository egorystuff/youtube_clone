import DropdownSettingListItem from "../components/TheHeader/TheDropdown/DropdownSettingListItem.vue";
import DropdownSettingsHeader from "../components/TheHeader/TheDropdown/DropdownSettingsHeader.vue";

export default {
  components: {
    DropdownSettingListItem,
    DropdownSettingsHeader,
  },

  props: ["selectedOptions"],

  emits: ["close", "select-option"],

  data() {
    return {
      optionName: null,
    };
  },

  methods: {
    selectOption(option) {
      this.$emit("select-option", { name: this.optionName, value: option });
    },
  },
};
