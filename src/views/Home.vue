<template>
    <div class="home flex flex-wrap mx-4">
        <div
            v-for="smoothie in smoothies"
            :key="smoothie.id"
            class="w-full relative sm:w-1/2 md:w-1/3 lg:w-1/4 my-4"
        >
            <section
                class="card relative flex flex-col items-center bg-gray-400 py-10 px-4 rounded-lg shadow-xl mx-4"
            >
                <svg
                    @click="deleteSmoothie(smoothie.id)"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 absolute cursor-pointer top-0 right-0 mr-2 mt-2 fill-current text-red-500"
                    viewBox="0 0 24 24"
                >
                    <path
                        class="heroicon-ui"
                        d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
                    />
                </svg>
                <p class="text-blue-800 text-2xl font-semibold">{{ smoothie.title }}</p>
                <ul class="flex flex-row justify-start flex-wrap mt-4">
                    <li
                        class="inline-block rounded-full bg-gray-200 px-2 py-1 m-1"
                        v-for="(ingredient, index) in smoothie.ingredients"
                        :key="index"
                    >{{ ingredient }}</li>
                </ul>
                <router-link
                    :to="{ name: 'EditSmoothie', params: { smoothie_slug: smoothie.slug } }"
                >
                    <div
                        class="absolute right-0 bottom-0 -mb-5 mr-6 p-2 cursor-pointer leading-none rounded-full bg-blue-400 hover:bg-blue-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 fill-current text-white"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
                            />
                        </svg>
                    </div>
                </router-link>
            </section>
        </div>
    </div>
</template>

<script>
import db from "@/firebase/init";
export default {
    name: "home",
    data() {
        return {
            smoothies: []
        };
    },
    methods: {
        deleteSmoothie(smoothieId) {
            // Delete smoothie from Firestore
            // doc refers to the element in Firestore
            db.collection("smoothies")
                .doc(smoothieId)
                .delete() // delete smoothie in the backend
                .then(() => {
                    this.smoothies = this.smoothies.filter(smoothie => {
                        return smoothie.id != smoothieId;
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        // Fetch data from the Firestore
        // Get smoothies object created on Firebase (online)
        db.collection("smoothies")
            .get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let smoothie = doc.data();
                    smoothie.id = doc.id;
                    this.smoothies.push(smoothie);
                });
            });
    }
};
</script>
