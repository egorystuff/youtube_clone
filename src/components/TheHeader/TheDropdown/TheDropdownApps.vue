<template>
  <div
    class="opacity-0 group-hover:opacity-100 duration-500 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0">
    <section class="py-2">
      <ul>
        <DropdownListIten label="YahTube TV" />
      </ul>
    </section>

    <section class="py-2 border-b">
      <ul>
        <DropdownListIten label="YahTube Music" />
        <DropdownListIten label="YahTube Kids" />
      </ul>
    </section>

    <section class="py-2 border-b">
      <ul>
        <DropdownListIten label="Creator Academy" />
        <DropdownListIten label="YahTube for Artist" />
      </ul>
    </section>
  </div>
</template>

<script>
import DropdownListIten from "./DropdownListIten.vue";

export default {
  components: {
    DropdownListIten,
  },
};
</script>
