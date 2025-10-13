<script setup>
import { ref } from 'vue'
import ModalEntry from '../components/Modal.vue'
import Content1 from '../components/Posts/Content1.vue'
import Content2 from '../components/Posts/Content2.vue'
import Content3 from '../components/Posts/Content3.vue'

const activeModal = ref(null)
const showQuoteModal = ref(false)
const showContactModal = ref(false)

const blogPosts = [
    {   id: "post3",
        date: 'September 20, 2025',
        title: 'The Nature of Hope',
        summary: "How do random things suddenly turn definite?",
        component: Content3,
    },
    {   id: "post2",
        date: 'September 18, 2025',
        title: 'Zooming In and Out',
        summary: "Chaos and order are not antonyms.",
        component: Content2,
    },
    {   id: "post1",
        date: 'August 4, 2024',
        title: 'Nothing is Happening Anymore',
        summary: "What happened to our childhoods?",
        component: Content1,
    },
]
</script>

<template>
    <div class="min-h-[120vh] mt-12">
        <div class="w-[70%] pb-[5%] mx-auto">
            <h1 class="text-6xl font-bold mb-4">The Fog</h1>
            <h5 class="italic mb-8">oh look, you found it. you really found it.</h5>
            <div class="flex flex-col sm:flex-row justify-start gap-5 items-center mb-8">
                <button class="bg-white border border-black rounded-md py-2 w-[300px] text-black hover:text-gray-700 transition duration-300" @click="showQuoteModal = true">
                    Verse of the Month
                </button>
                <button class="bg-white border border-black rounded-md py-2 w-[300px] text-black hover:text-gray-700 transition duration-300"
                @click="showContactModal = true">
                    Contact Me
                </button>
            </div>
            <div class="border-y-2 border-gray-200">
                <div v-for="(post, i) in blogPosts" :key="i" @click="activeModal = post.id" class="flex flex-col items-center sm:flex-row sm:items-center py-2 hover:bg-[#476162] transition cursor-pointer">
                    <!-- Date -->
                    <div class="sm:w-[25%] text-md font-medium text-gray-200 mb-2 sm:mb-0 ps-5">
                        {{ post.date }}
                    </div>

                    <!-- Title -->
                    <div class="sm:w-[35%]">
                        <h2 class="text-base font-semibold underline underline-offset-4 decoration-[#93c4c6]">{{ post.title }}</h2>
                    </div>

                    <!-- Summary -->
                    <div class="sm:w-[65%] text-md font-medium text-gray-300 pe-5 text-compressed">
                        <p class="mt-2">{{ post.summary }}</p>
                    </div>
                </div>
            </div>

            <ModalEntry v-for="post in blogPosts" :key="'modal-' + post.id" :show="activeModal === post.id" :title="post.title" :date="post.date" @close="activeModal = null">
                <component :is="post.component" />
            </ModalEntry>

            <ModalEntry :show="showQuoteModal" title="Verse of the Month" date="— Dearly" @close="showQuoteModal = false">
                <div class="w-3/4 mx-auto my-6">
                    <div class="ps-10 text-8xl">“</div>
                    <p class="ps-10 text-xl -translate-y-8">
                        It's that baffled look I see a lot.<br>
                        So hard to describe the smallest details of how<br>
                        all these dearly gathered together<br>
                        of how we used to live.<br>
                    </p>
                    <p class="ps-20 -translate-y-4">
                        &mdash; <span class="italic">Margaret Atwood</span>
                    </p>
                </div>
            </ModalEntry>

            <ModalEntry :show="showContactModal" title="Contact Me!" date="" @close="showContactModal = false">
                <form action="https://getform.io/f/avrydgwa" method="POST">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="fullname" placeholder="Your name..." required>

                    <label for="emailaddress">Email</label>
                    <input type="email" id="emailaddress" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" size="30" placeholder="@youremail.com" required/>

                    <label for="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Interesting..." style="height:141px;"></textarea>

                    <input type="submit" value="Submit" id="submit-button">
                </form>
            </ModalEntry>
        </div>
    </div>
</template>

<style scoped>
.text-compressed {
    letter-spacing: -0.5px;
}

#submit-button {
    background-color: #93c4c6;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#submit-button:hover {
    background-color: #93c4c6;
}

input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 6px 0 16px 0;
    resize: vertical;
    outline: none;
    box-sizing: border-box;
    color: black;
}
input:invalid {
    box-shadow: 0 0 5px 1px #93c4c6;
}
input:focus:invalid {
    box-shadow: none;
}
button {
    outline: none;
}
</style>
