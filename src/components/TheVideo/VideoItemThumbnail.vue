<template>
  <div class="relative">
    <img :src="`https://loremflickr.com/720/404?random=${index}`" alt="" />
    <span
      class="transition opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-0 right-0 bg-black text-white rounded-sm m-1 p-1">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clip-rule="evenodd"></path>
      </svg>
    </span>
    <span
      class="transition opacity-0 group-hover:opacity-100 bg-opacity-60 absolute top-8 right-0 bg-black text-white rounded-sm m-1 p-1">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clip-rule="evenodd"></path>
      </svg>
    </span>
    <span
      class="absolute group-hover:opacity-0 duration-500 bg-opacity-60 bottom-0 right-0 bg-black text-white rounded-sm m-1 p-1 text-xs font-semibold"
      >6:35</span
    >
  </div>
</template>

<script>
export default {
  props: ["index"],
};
</script>
