<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarCompact v-if="isCompactSidebarOpen" />
  <TheSidebar v-if="isSidebarOpen" />
  <TheSidebarMobile :is-open="isMobileSidebarOpen" @close="closeMobileSidebar" />
  <TheCategories :is-sidebar-open="isSidebarOpen" />
  <TheVideos :is-sidebar-open="isSidebarOpen" />
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheSidebarCompact from "./components/TheSidebar/TheSidebarCompact.vue";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebar/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories/TheCategories.vue";
import TheVideos from "./components/TheVideo/TheVideos.vue";

export default {
  components: {
    TheHeader,
    TheSidebarCompact,
    TheSidebar,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },

  data() {
    return {
      isMobileSidebarOpen: false,
      isCompactSidebarOpen: false,
      isSidebarOpen: false,
      isCompactSidebarActive: null,
    };
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.isCompactSidebarOpen = false;
        this.isSidebarOpen = false;
      } else if (window.innerWidth < 1280) {
        this.isCompactSidebarOpen = true;
        this.isSidebarOpen = false;
      } else {
        this.isCompactSidebarOpen = this.isCompactSidebarActive;
        this.isSidebarOpen = !this.isCompactSidebarActive;
        this.isMobileSidebarOpen = false;
      }
    },

    toggleSidebar() {
      if (window.innerWidth >= 1280) {
        this.isCompactSidebarActive = !this.isCompactSidebarActive;
        this.onResize();
      } else {
        this.openMobileSidebar();
      }
    },

    openMobileSidebar() {
      this.isMobileSidebarOpen = true;
    },

    closeMobileSidebar() {
      this.isMobileSidebarOpen = false;
    },
  },
};
</script>
