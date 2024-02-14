<template>
  <TheHeader />
  <TheSidebarSmall />
  <TheSidebar />
  <TheSidebarMobile />
  <TheCategories />
  <TheVideos />
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheSidebarSmall from "./components/TheSidebar/TheSidebarSmall.vue";
import TheSidebar from "./components/TheSidebar/TheSidebar.vue";
import TheSidebarMobile from "./components/TheSidebar/TheSidebarMobile.vue";
import TheCategories from "./components/TheCategories/TheCategories.vue";
import TheVideos from "./components/TheVideo/TheVideos.vue";

export default {
  components: {
    TheHeader,
    TheSidebarSmall,
    TheSidebar,
    TheSidebarMobile,
    TheCategories,
    TheVideos,
  },
};
</script>
