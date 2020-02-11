<template>
    <section class="flex flex-col items-center" v-if="smoothie">
        <h1 class="text-3xl mb-2 text-blue-800">
            Edit
            <span class="font-bold">"{{ smoothie.title }}"</span> smoothie
        </h1>
        <div class="w-full max-w-md">
            <form
                @submit.prevent="editSmoothie"
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
                        v-model="smoothie.title"
                    />
                </div>
                <div class="mb-6">
                    <div
                        class="mb-4"
                        v-for="(ingredient, index) in smoothie.ingredients"
                        :key="index"
                    >
                        <label
                            class="block text-blue-800 text-sm font-bold mb-2"
                            for="ingredient"
                        >Ingredient :</label>
                        <div class="flex items-center">
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-800 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                name="ingredient"
                                id="ingredient"
                                v-model="smoothie.ingredients[index]"
                                @keydown.enter.prevent
                                @keypress.enter.prevent
                                @keyup.enter.prevent
                            />
                            <svg
                                @click="removeIngredient(ingredient)"
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-10 w-10 cursor-pointer ml-2 fill-current text-red-500"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    class="heroicon-ui"
                                    d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
                                />
                            </svg>
                        </div>
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
                    >Update Recipe</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
    name: "EditSmoothie",
    data() {
        return {
            smoothie: null,
            ingredient: null,
            warningMessage: null
        };
    },
    methods: {
        editSmoothie() {
            // Check all input are filled
            if (this.smoothie.title && this.smoothie.ingredients.length > 0) {
                this.warningMessage = null;
                // Create a slug from the title
                this.smoothie.slug = slugify(this.smoothie.title, {
                    replacement: "-",
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                });
                // get smoothie collection from Firebase and update the selected smoothie
                db.collection("smoothies")
                    .doc(this.smoothie.id)
                    .update({
                        title: this.smoothie.title,
                        ingredients: this.smoothie.ingredients,
                        slug: this.smoothie.slug
                    })
                    // If success, redirect to home
                    .then(() => {
                        this.$router.push({ name: "Home" });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            // if smoothie title is missing
            } else if (!this.smoothie.title) {
                this.warningMessage = "Smoothie name is required";
            // ingredient input is empty
            } else {
                this.warningMessage = "Add at least one ingredient";
            }
        },
        addIngredient() {
            /*  Check if ingredient input is not empty
                    Then push the ingredient in ingredients array
                    empty ingredient input and warning message
                else
                    display warning message
            */
            if (this.ingredient) {
                this.smoothie.ingredients.push(this.ingredient);
                this.ingredient = null;
                this.warningMessage = null;
            } else {
                this.warningMessage = "Enter a value to add an ingredient";
            }
        },
        removeIngredient(ingredientSelected) {
            // Keep ingredients different from the selected ingredient in param
            this.smoothie.ingredients = this.smoothie.ingredients.filter(
                ingredient => {
                    return ingredient != ingredientSelected;
                }
            );
        }
    },
    created() {
        // let ref = db.collection('smoothies').doc(id)
        let ref = db
            .collection("smoothies")
            .where("slug", "==", this.$route.params.smoothie_slug);
        // snapshot is a collection of items
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.smoothie = doc.data();
                this.smoothie.id = doc.id;
            });
        });
    }
};
</script>

<style lang="scss" scoped>
</style>