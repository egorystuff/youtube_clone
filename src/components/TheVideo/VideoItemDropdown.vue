<template>
  <div class="relative -mt-1 ml-auto">
    <button @click="toggle" :class="buttonClasses">
      <BaseIcon name="dotsVertical" class="w-6 h-6" />
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transition opacity-0 scale-95">
      <div v-show="isOpen" ref="dropdownSetting" @keydown.esc="isOpen = false" tabindex="-1" :class="dropdownClasses">
        <section class="py-2">
          <ul>
            <VideoItemDropdownListItem label="Add to queue" icon="menuAlt3" />
          </ul>
        </section>
      </div>
    </Transition>
  </div>
</template>

<script>
import BaseIcon from "../BaseIcon.vue";
import VideoItemDropdownListItem from "./VideoItemDropdownListItem.vue";

export default {
  components: {
    BaseIcon,
    VideoItemDropdownListItem,
  },

  data() {
    return {
      isOpen: false,
      positionClasses: [],
    };
  },

  computed: {
    buttonClasses() {
      return [
        "p-1",
        "text-gray-500",
        "hover:text-gray-700",
        "focus:outline-none",
        "group-hover:opacity-100",
        this.isOpen ? "opacity-100" : "opacity-0",
      ];
    },

    dropdownClasses() {
      return ["z-10", "absolute", "bg-white", "w-52", "rounded", "shadow", "duration-500", ...this.positionClasses];
    },
  },

  watch: {
    isOpen() {
      document.body.classList.toggle("overflow-hidden");
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

  methods: {
    toggle(event) {
      this.isOpen = !this.isOpen;

      this.$nextTick(() => {
        if (this.isOpen) {
          this.positionClasses = this.getPositionClasses(event);
        }
      });

      // window.addEventListener("scroll", () => (this.isOpen = false));
    },

    getPositionClasses(event) {
      return [this.getTopClass(event), this.getRightClass(event), this.getBottomClass(event), this.getLeftClass(event)];
    },

    getTopClass(event) {
      const clickCoordY = event.clientY;
      const buttonHeight = event.currentTarget.offsetHeight;
      const dropdownHeight = this.$refs.dropdownSetting.offsetHeight;

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return "top-auto";
      }

      if (window.innerHeight - clickCoordY < dropdownHeight + buttonHeight) {
        return "top-0";
      }

      return "top-8";
    },

    getRightClass(event) {
      const clickCoordX = event.clientX;
      const clickCoordY = event.clientY;
      const dropdownWidth = this.$refs.dropdownSetting.offsetWidth;
      const dropdownHeight = this.$refs.dropdownSetting.offsetHeight;
      const buttonHeight = event.currentTarget.offsetHeight;

      if (window.innerWidth - clickCoordX > dropdownWidth) {
        return "right-auto";
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return "right-0";
      }

      if (window.innerHeight - clickCoordY > dropdownHeight) {
        return "right-8";
      }

      return "right-0";
    },

    getBottomClass(event) {
      const clickCoordY = event.clientY;
      const dropdownHeight = this.$refs.dropdownSetting.offsetHeight;

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return "bottom-9";
      }
      return "bottom-auto";
    },

    getLeftClass(event) {
      const clickCoordX = event.clientX;
      const clickCoordY = event.clientY;
      const dropdownWidth = this.$refs.dropdownSetting.offsetWidth;
      const dropdownHeight = this.$refs.dropdownSetting.offsetHeight;
      const buttonHeight = event.currentTarget.offsetHeight;

      if (window.innerWidth - clickCoordX < dropdownWidth) {
        return "left-auto";
      }

      if (window.innerHeight - clickCoordY < dropdownHeight) {
        return "left-auto";
      }

      if (window.innerHeight - clickCoordY > dropdownHeight + buttonHeight) {
        return "left-auto";
      }

      return "left-8";
    },
  },
};
</script>
