<template>
  <header :class="classes">
    <!-- left -->
    <div :class="leftSideClasses">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
          <BaseIcon @click="$emit('toggleSidebar')" name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>

    <!-- center -->
    <TheSearchWrapper
      v-show="isSearchShown"
      :is-small-screen="isSmallScreen"
      @close="closeMobileSearch"
      @open-voice-modal="isVoiceModalOpen = true" />

    <!-- right -->
    <div :class="rightSideClasses">
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none" @click="isVoiceModalOpen = true">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>

      <BaseTooltip text="Search">
        <button @click.stop="isMobileSearchActive = true" class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>

      <TheDropdownApps />

      <TheDropdownSettings />

      <ButtonLogin />
    </div>
  </header>

  <Teleport to="body">
    <TheModalSearchWithVoice v-if="isVoiceModalOpen" @close="isVoiceModalOpen = false" />
  </Teleport>
</template>

<script>
import { computed } from "vue";
import TheDropdownApps from "./TheDropdown/TheDropdownApps.vue";
import TheDropdownSettings from "./TheDropdown/TheDropdownSettings.vue";
import LogoMain from "../LogoMain.vue";
import BaseIcon from "../BaseIcon.vue";
import BaseTooltip from "../BaseTooltip.vue";
import ButtonLogin from "../ButtonLogin.vue";
import TheSearchWrapper from "./TheSearch/TheSearchWrapper.vue";
import TheModalSearchWithVoice from "../Modal/TheModalSearchWithVoice.vue";

export default {
  components: {
    LogoMain,
    TheSearchWrapper,
    TheDropdownApps,
    TheDropdownSettings,
    ButtonLogin,
    BaseIcon,
    BaseTooltip,
    TheModalSearchWithVoice,
  },

  provide() {
    return {
      isMobileSearchActive: computed(() => this.isMobileSearchActive),
    };
  },

  emits: {
    toggleSidebar: null,
  },

  data() {
    return {
      isSmallScreen: false,
      isMobileSearchActive: false,
      isVoiceModalOpen: false,

      classes: ["flex", "justify-between", "w-full", "bg-white", "bg-opacity-95"],
    };
  },

  computed: {
    isSearchShown() {
      return this.isMobileSearchActive || !this.isSmallScreen;
    },

    isMobileSearchShown() {
      return this.isSmallScreen && this.isMobileSearchActive;
    },

    leftSideClasses() {
      return ["lg:w-1/4", "flex", this.opacity];
    },

    rightSideClasses() {
      return ["flex", "items-center", "justify-end", "lg:w-1/4", "sm:space-x-3", "p-2", "sm:px-4", this.opacity];
    },

    opacity() {
      return this.isMobileSearchShown ? "opacity-0" : "opacity-100";
    },
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth < 640) {
        this.isSmallScreen = true;
      } else {
        this.closeMobileSearch();
        this.isSmallScreen = false;
      }
    },

    closeMobileSearch() {
      this.isMobileSearchActive = false;
    },
  },
};
</script>
