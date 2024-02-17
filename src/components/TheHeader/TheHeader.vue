<template>
  <header class="flex justify-between fixed z-30 w-full">
    <!-- left -->
    <div class="lg:w-1/4 flex">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
          <BaseIcon @click="$emit('toggleSidebar')" name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>

    <!-- center -->
    <div
      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
      <TheSearch />
      <button class="ml-4 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </div>

    <!-- right -->
    <div class="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
      <button class="sm:hidden p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>

      <button class="sm:hidden p-2 focus:outline-none">
        <BaseIcon name="search" class="w-5 h-5" />
      </button>

      <TheDropdownApps />

      <TheDropdownSettings />

      <ButtonLogin />
    </div>
  </header>
</template>

<script>
import TheDropdownApps from "./TheDropdown/TheDropdownApps.vue";
import TheDropdownSettings from "./TheDropdown/TheDropdownSettings.vue";
import LogoMain from "../LogoMain.vue";
import BaseIcon from "../BaseIcon.vue";
import ButtonLogin from "../ButtonLogin.vue";
import TheSearch from "./TheSearch/TheSearch.vue";

export default {
  components: {
    LogoMain,
    TheSearch,
    TheDropdownApps,
    TheDropdownSettings,
    ButtonLogin,
    BaseIcon,
  },

  emits: {
    toggleSidebar: null,
  },
};
</script>
