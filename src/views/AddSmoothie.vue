<template>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl mb-2 text-blue-800">Add new smoothie recipe</h1>
        <div class="w-full max-w-md">
            <form
                @submit.prevent="addSmoothie"
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div class="mb-4">
                    <label
                        class="block text-blue-800 text-sm font-bold mb-2"
                        for="smoothie-name"
                    >Smoothie Name</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="smoothie-name"
                        type="text"
                        placeholder="Smoothie Name"
                        required
                        v-model="smoothieName"

                    />
                </div>
                <div class="mb-6">
                    <label
                        class="block text-blue-800 text-sm font-bold mb-2"
                        for="ingredients"
                    >Ingredients</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="ingredients"
                        type="text"
                        placeholder="Ingredients"
                        required
                    />
                    <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >Add Recipe</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddSmoothie",
    data() {
        return {
            smoothieName: null
        };
    },
    methods: {
        addSmoothie() {
            console.log(this.smoothieName);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>