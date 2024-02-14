<template>
  <section class="pt-14 md:pl-24 xl:pl-64 fixed w-full bg-white bg-opacity-95 z-10">
    <div class="border-t border-b">
      <div class="px-4 py-3 flex space-x-3 overflow-x-auto text-sm whitespace-nowrap max-w-screen-2xl m-auto">
        <CategoryItem
          v-for="category in categories"
          :key="category"
          :category="category"
          :is-active="category === 'All'" />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";

export default {
  components: {
    CategoryItem,
  },
  data() {
    return {
      categories: [
        "All",
        "Trucks",
        "Tools",
        "Machines",
        "Engines",
        "Snow",
        "Ships",
        "Roads",
        "Tanks",
        "Building",
        "Mars",
        "Woodworking",
        "Tractors",
        "Songs",
        "Shows",
        "Football",
        "Planes",
        "Live",
        "Streets",
        "Math",
        "Programming",
      ],
    };
  },
};
</script>
