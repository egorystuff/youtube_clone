<template>
  <div class="relative">
    <BaseTooltip text="YahTube apps">
      <button @click="isOpen = !isOpen" class="relative p-2 focus:outline-none">
        <BaseIcon name="viewGrid" class="w-5 h-5" />
      </button>
    </BaseTooltip>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95">
      <div v-show="isOpen" ref="dropdownApp" @keydown.esc="isOpen = false" tabindex="-1" :class="dropdownClasses">
        <section class="py-2">
          <ul>
            <DropdownListItem label="YahTube TV" />
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <DropdownListItem label="YahTube Music" />
            <DropdownListItem label="YahTube Kids" />
          </ul>
        </section>

        <section class="py-2 border-b">
          <ul>
            <DropdownListItem label="Creator Academy" />
            <DropdownListItem label="YahTube for Artist" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script>
import DropdownListItem from "./DropdownListItem.vue";
import BaseIcon from "../../BaseIcon.vue";
import BaseTooltip from "../../BaseTooltip.vue";

export default {
  components: {
    DropdownListItem,
    BaseIcon,
    BaseTooltip,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdownApp.focus());
    },
  },

  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },

  computed: {
    dropdownClasses() {
      return [
        "absolute",
        "top-9",
        "z-10",
        "right-0",
        "sm:left-0",
        "bg-white",
        "w-60",
        "border",
        "border-t-0",
        "duration-500",
        "focus:outline-none",
      ];
    },
  },
};
</script>
