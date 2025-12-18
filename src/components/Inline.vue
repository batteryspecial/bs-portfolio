<template>
    <a :href="href" class="inline-link relative inline-flex items-center transition duration-300 gap-0.5 px-1" :data-hover-color="color" target="_blank" rel="noopener">
        <img class="mr-1 h-3 w-auto duration-200" :src="logo" alt=""/>
        <span class="z-40 text-white text-opacity-100">
            <slot>{{ content }}</slot>
        </span>
    </a>
</template>

<script setup>
defineProps({
  logo: { type: String },
  color: { type: String, required: true }, // e.g. "white", "blue", etc.
  href: { type: String, required: true },
  content: { type: String, default: '' }
});
</script>