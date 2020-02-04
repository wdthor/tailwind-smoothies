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
                    <div class="mb-4" v-for="(ingredient, index) in ingredients" :key="index">
                        <label
                            class="block text-blue-800 text-sm font-bold mb-2"
                            for="ingredient"
                        >Ingredient :</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
                         type="text" name="ingredient" id="ingredient" v-model="ingredients[index]">
                    </div>
                    <label
                        class="block text-blue-800 text-sm font-bold mb-2"
                        for="add-ingredient"
                    >Add an ingredient</label>
                    <div class="flex flex-row items-center mb-2">
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
                            id="add-ingredient"
                            name="add-ingredient"
                            type="text"
                            placeholder="Ingredients"
                            v-model="ingredient"
                            @keydown.enter.prevent
                            @keyup.enter="addIngredient"
                        />
                        <button
                            class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white p-1 ml-2 border border-blue-500 hover:border-transparent rounded"
                            type="button"
                            @keydown.enter.prevent
                            @click.prevent="addIngredient"
                            @keyup.enter="addIngredient"
                        >
                            <svg
                                class="h-8 w-8 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    class="heroicon-ui"
                                    d="M17 11a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4h4z"
                                />
                            </svg>
                        </button>
                    </div>
                    <p
                        class="text-blue-500 text-xs italic"
                    >Press enter to add a new ingredient or click on the + button.</p>
                    <p
                        v-if="warningMessage"
                        class="text-red-500 text-xs italic"
                    >{{ warningMessage }}</p>
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
            smoothieName: null,
            ingredients: [],
            ingredient: null,
            warningMessage: null
        };
    },
    methods: {
        addSmoothie() {
            console.log(this.smoothieName);
            console.log(this.ingredients);
        },
        addIngredient() {
            /*  Check if ingredient input is not empty
                    Then push the ingredient in ingredients array
                    empty ingredient input and warning message
                else
                    display warning message
            */
            if (this.ingredient) {
                this.ingredients.push(this.ingredient);
                this.ingredient = null;
                this.warningMessage = null;
            } else {
                this.warningMessage = "Enter a value to add an ingredient";
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>