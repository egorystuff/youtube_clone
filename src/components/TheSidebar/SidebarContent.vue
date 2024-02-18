<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Home" icon="home" is-active />
      <SidebarNavItem label="Trending" icon="fire" />
      <SidebarNavItem label="Subscriptions" icon="collection" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Library" icon="duplicate" />
      <SidebarNavItem label="History" icon="clock" />
    </ul>
  </SidebarSection>

  <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
    <span class="text-sm"> Sign in to like videos, comment, and subscribe.</span>
    <ButtonLogin
      class="flex items-center px-3 py-1 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-full focus:outline-none" />
  </SidebarSection>

  <SidebarSection>
    <SidebarSectionHeading title="Best of YahTube" />
    <ul>
      <SidebarNavItem label="Music" icon="musicNote" />
      <SidebarNavItem label="Sports" icon="speakerphone" />
      <SidebarNavItem label="Gaming" icon="puzzle" />
      <SidebarNavItem label="Movies" icon="film" />
      <SidebarNavItem label="News" icon="newspaper" />
      <SidebarNavItem label="Live" icon="statusOnline" />
      <SidebarNavItem label="360&deg; Video" icon="eye" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="YahTube Premium" icon="plusCircle" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <SidebarSectionHeading title="More from YahTube" />
    <ul>
      <SidebarNavItem label="Browse channels" icon="plusCircle" />
      <SidebarNavItem label="Live" icon="statusOnline" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Setting" icon="cog" />
      <SidebarNavItem label="Report history" icon="flag" />
      <SidebarNavItem label="Help" icon="questionMarkCircle" />
      <SidebarNavItem label="Send feedback" icon="annotation" />
    </ul>
  </SidebarSection>

  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter />
  </SidebarSection>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import SidebarSectionHeading from "./SidebarSectionHeading.vue";
import SidebarSection from "./SidebarSection.vue";
import TheFooter from "./TheFooter.vue";
import ButtonLogin from "../ButtonLogin.vue";

export default {
  components: {
    SidebarNavItem,
    ButtonLogin,
    SidebarSectionHeading,
    SidebarSection,
    TheFooter,
  },
};
</script>
