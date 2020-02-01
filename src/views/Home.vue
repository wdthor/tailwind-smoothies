<template>
  <div class="home flex flex-wrap mx-4">
    <div
      v-for="smoothie in smoothies"
      :key="smoothie.id"
      class="w-full relative sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
    >
      <svg
      @click="deleteSmoothie(smoothie.id)"
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 absolute cursor-pointer right-0 mr-6 mt-2 fill-current text-red-500"
        viewBox="0 0 24 24"
      >
        <path
          class="heroicon-ui"
          d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
        />
      </svg>
      <div class="card flex flex-col items-center bg-gray-400 p-10 rounded-lg shadow-xl mx-4">
        <p class="text-blue-800 text-2xl font-semibold">{{ smoothie.title }}</p>
        <ul class="flex flex-row justify-start mt-4">
          <li
            class="inline-block rounded-full bg-gray-200 px-2 py-1 mx-1"
            v-for="(ingredient, index) in smoothie.ingredients"
            :key="index"
          >{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      smoothies: [
        {
          title: "Ninja Brew",
          slug: "ninja-brew",
          ingredients: ["bananas", "apple", "strawberries"],
          id: 1
        },
        {
          title: "Morning Mood",
          slug: "morning-mood",
          ingredients: ["mango", "lime", "juice"],
          id: 2
        }
      ]
    };
  },
  methods: {
    deleteSmoothie(smoothieId) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != smoothieId;
      })
    }
  }
};
</script>
