<script setup>
const props = defineProps({
    src: String,
    alt: String,
    href: String,
});
</script>

<template>
    <a :href="href" target="_blank" class="group relative flex flex-col items-center justify-center p-4 bg-white text-white rounded-full w-10 h-10 duration-200 overflow-hidden">
        <div class="absolute transition-all duration-300 ease-in-out group-hover:translate-y-full group-hover:opacity-0">
            <img :src="src" :alt="alt" class="w-6 h-6"/>
        </div>
        <div class="absolute translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 inversion">
            <svg class="w-5 h-5" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </div>
    </a>
</template>

<style scoped>
.inversion {
  filter: invert(100%);
}
</style> 