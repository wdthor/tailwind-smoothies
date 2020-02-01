<template>
  <nav class="relative flex items-center justify-between flex-wrap bg-blue-700 p-6 mb-10">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Tailwind Smoothies</span>
    </div>
    <router-link to="" tag="a"
      class="absolute right-0 mt-10 mr-16 inline-block text-sm p-2 leading-none rounded-full hover:border-transparent hover:text-teal-400 hover:bg-green-600 mt-4 bg-green-500"
    >
      <svg
        class="h-8 w-8 fill-current text-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="heroicon-ui"
          d="M17 11a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4h4z"
        />
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped></style>
